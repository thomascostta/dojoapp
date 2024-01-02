import { ReactNode } from "react";
import { UserProvider } from "./user";
import { PaymentsProvider } from "./payments";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <PaymentsProvider>
      <UserProvider>{children}</UserProvider>
    </PaymentsProvider>
  );
}

export { AppProvider };
