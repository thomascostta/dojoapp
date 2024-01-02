import { api } from "../api";

export type IUserData = {
  address: string;
  birthday: string;
  cellPhone1: string;
  cellPhone2: string;
  cellPhoneMessage: string;
  password?: string;
  cpf: string;
  dueDate: number;
  email: string;
  name: string;
  monthlyPayment: number;
  numberAddress: string;
  numberOfStudents: number;
};

async function register(data: IUserData) {
  try {
    const response = await api.post("/register", data);

    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

export { register };
