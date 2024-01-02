import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { config, login, password, isEmail } from "../services/functions/auth";
import { IUserData, register } from "../services/functions/register";
import { generateToken } from "../utils/simulatorFunctions";

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserProviderProps {
  children: ReactNode;
}

type TypeRegister = {
  userData: IUserData;
  isToken?: boolean;
};

interface userConfigCredentials {
  dueDate: string;
  monthlyPayment: string;
  numberOfStudents: string;
}

interface UserContextData {
  tokenFake: string | null;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  codeSending: (code: number) => Promise<{ code: number }>;
  updatePassword: (
    newPass: string,
    oldPassword: string
  ) => Promise<{ newPass: string; oldPassword: string }>;
  registerUser: (userData: TypeRegister) => Promise<void>;
  userRegister: IUserData | null;
  configUser: ({
    dueDate,
    monthlyPayment,
    numberOfStudents,
  }: userConfigCredentials) => Promise<void>;
  emailValidation: (email: string) => Promise<string>;
  createPassword: (password: string) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider = ({ children }: UserProviderProps) => {
  const [tokenFake, setToken] = useState<UserContextData["tokenFake"]>(null);
  const [userRegister, setUserRegister] = useState<IUserData | null>(null);

  useEffect(() => {
    async function loadStoredData() {
      const storedToken = await AsyncStorage.getItem("userToken");

      if (storedToken) {
        setToken(storedToken);
      }
    }

    loadStoredData();
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const simulatedToken = generateToken();
    setToken(simulatedToken);
    await login({ email, password, token: simulatedToken });
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("userToken");
    setToken(null);
  };

  const codeSending = async (code: number): Promise<{ code: number }> => {
    if (code === 123456) {
      return {
        code,
      };
    } else {
      throw new Error("Credenciais inválidas");
    }
  };

  const updatePassword = async (
    newPass: string,
    oldPassword: string
  ): Promise<{ newPass: string; oldPassword: string }> => {
    const simulatedToken = generateToken();

    if (oldPassword !== newPass) {
      try {
        await password({ password: newPass, token: simulatedToken });
        return {
          newPass,
          oldPassword,
        };
      } catch (error) {
        console.error("Error changing password:", error);
        throw new Error("Failed to change password");
      }
    } else {
      throw new Error("Nova senha igual à senha antiga");
    }
  };

  const createPassword = async (pass: string): Promise<void> => {
    const simulatedToken = generateToken();
    try {
      await password({ password: pass, token: simulatedToken });
    } catch (error) {
      console.error("Error create password:", error);
      throw new Error("Failed to create password");
    }
  };

  const registerUser = useCallback(
    async ({ userData, isToken = true }: TypeRegister) => {
      try {
        const simulatedToken = generateToken();
        {
          isToken && setToken(simulatedToken);
        }
        await AsyncStorage.setItem("userToken", simulatedToken);
        const userDataWithToken = { ...userData, token: simulatedToken };

        const response = await register(userDataWithToken);
        const registeredUser = response.data;

        setUserRegister(registeredUser);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    },
    []
  );

  const emailValidation = async (email: string) => {
    await isEmail(email);
    try {
      return email;
    } catch (error) {
      throw new Error("Credenciais inválidas");
    }
  };

  const configUser = async ({
    dueDate,
    monthlyPayment,
    numberOfStudents,
  }: userConfigCredentials) => {
    const simulatedToken = generateToken();

    try {
      await config({
        dueDate,
        monthlyPayment,
        numberOfStudents,
        token: simulatedToken,
      });
    } catch (error) {
      console.error("Failed to send config:", error);
      throw new Error("Failed to send config");
    }
  };

  return (
    <UserContext.Provider
      value={{
        tokenFake,
        signIn,
        signOut,
        codeSending,
        updatePassword,
        registerUser,
        userRegister,
        configUser,
        emailValidation,
        createPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
