import { api } from "../api";

interface SignInCredentials {
  email: string;
  password: string;
  token: string;
}

interface PasswordCredentials {
  password: string;
  token: string;
}

interface userConfigCredentials {
  dueDate: string;
  monthlyPayment: string;
  numberOfStudents: string;
  token: string;
}

async function login({ email, password, token }: SignInCredentials) {
  try {
    const response = await api.post("/auth", {
      email,
      password,
      token,
    });

    return response;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
}

async function password({ password, token }: PasswordCredentials) {
  try {
    const response = await api.post("/password", {
      password,
      token,
    });

    return response;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
}

async function config({
  dueDate,
  monthlyPayment,
  numberOfStudents,
  token,
}: userConfigCredentials) {
  try {
    const response = await api.post("/config", {
      dueDate,
      monthlyPayment,
      numberOfStudents,
      token,
    });

    return response;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
}

async function isEmail(email: string) {
  try {
    const response = await api.post("/email", {
      email,
    });

    return response;
  } catch (error) {
    console.error("Error during e-mail:", error);
    throw error;
  }
}
export { login, password, config, isEmail };
