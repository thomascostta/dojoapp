export interface RootState {
  auth: {
    stepForgotPassword: "first" | "second" | "third";
    userVisibility: "login" | "newUser" | "forgotPassword";
    stepCreateNewUser: "first" | "second" | "third";
    chooseQuantityStudents: number;
  };
  user: {
    email: string;
    name: string;
    birthday: string;
    cpf: string;
    address: string;
    numberAddress: string;
    cellPhone1: string;
    cellPhone2: string;
    cellPhoneMessage: string;
  };
  config: {
    monthlyPayment: number;
    dueDate: number;
    numberOfStudents: number;
  };
  selectType:
    | "initialText"
    | "studentsAndGuardian"
    | "onlyGuardian"
    | "onlyStudent";
  modalChange: {
    selectType: "initialText" | "studentsAndGuardian" | "onlyGuardian" | "onlyStudent";
    visibleModalChangeUser: boolean;
    chooseQuantityStudents: number;
  };
}