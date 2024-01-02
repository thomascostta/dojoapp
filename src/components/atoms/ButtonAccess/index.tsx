import { TouchableOpacityProps } from "react-native";

import { Touchable, Title } from "./styles";

import ArrowRigthSVG from "../../../assets/ArrowRigth.svg";
import ScanSVG from "../../../assets/scan.svg";

interface IButtonAccessProps extends TouchableOpacityProps {
  disabled?: boolean;
  type: "biometry" | "accessApp";
}

export function ButtonAccess({
  disabled = false,
  type = "biometry",
  ...rest
}: IButtonAccessProps) {
  const textBiometry = "Continuar com Biometria";
  const textAccessApp = "Acessar o aplicativo";

  return (
    <Touchable disabled={disabled} {...rest}>
      <Title>{type === "biometry" ? textBiometry : textAccessApp}</Title>
      {type === "biometry" ? (
        <ScanSVG width={16} height={16} />
      ) : (
        <ArrowRigthSVG width={16} height={16} />
      )}
    </Touchable>
  );
}
