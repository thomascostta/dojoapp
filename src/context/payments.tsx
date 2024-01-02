import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { monthlyPayment } from "../services/functions/monthlyPayment";

interface PaymentsProviderProps {
  children: ReactNode;
}

interface PaymentData {
  paymentStatus: "paid" | "notPaid";
  payDay: string;
  referenceDate: string;
  id: number
}

interface PaymentsContextData {
  datePayments: PaymentData[];
}

const PaymentsContext = createContext<PaymentsContextData>(
  {} as PaymentsContextData
);

const PaymentsProvider = ({ children }: PaymentsProviderProps) => {
  const [datePayments, setDatePayments] = useState<PaymentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await monthlyPayment();
        setDatePayments(data);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return (
    <PaymentsContext.Provider value={{ datePayments }}>
      {children}
    </PaymentsContext.Provider>
  );
};

function usePayments(): PaymentsContextData {
  const context = useContext(PaymentsContext);

  if (!context) {
    throw new Error("usePayments must be used within a PaymentsProvider");
  }

  return context;
}

export { PaymentsProvider, usePayments };
