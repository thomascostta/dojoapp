import { TouchableOpacityProps } from "react-native";
import { Touchable, Title } from "./styles";

interface IButtonPrimaryProps extends TouchableOpacityProps {
  label: string;
  marginTop?: number;
  marginBotton?: number;
  isSelected?: boolean;
}

export function ButtonChangeStudents({
  marginTop = 0,
  marginBotton = 0,
  label,
  isSelected = false,
  ...rest
}: IButtonPrimaryProps) {
  return (
    <Touchable
      {...rest}
      marginTop={marginTop}
      marginBotton={marginBotton}
      isSelected={isSelected}
    >
      <Title isSelected={isSelected}>{label}</Title>
    </Touchable>
  );
}
