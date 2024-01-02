import { api } from "../api";

async function monthlyPayment() {
  try {
    const response = await api.get("/monthlyPayment");

    return response.data;
  } catch (error) {
    console.error("Error during monthly payment request:", error);

    throw error;
  }
}

export { monthlyPayment };
