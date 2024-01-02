import { TouchableOpacityProps } from "react-native";
import { Touchable, Title } from "./styles";

interface IButtonPrimaryProps extends TouchableOpacityProps {
  label: string;
  marginTop?: number;
  marginBotton?: number;
}

export function ButtonPrimary({
  marginTop = 0,
  marginBotton = 0,
  label,
  ...rest
}: IButtonPrimaryProps) {
  return (
    <Touchable {...rest} marginTop={marginTop} marginBotton={marginBotton}>
      <Title>{label}</Title>
    </Touchable>
  );
}
