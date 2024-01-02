import { TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Container } from "./styles";

export function ButtonBack({ ...rest }: TouchableOpacityProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Ionicons
        name="chevron-back-sharp"
        size={24}
        color={theme.colors.orange.secondary}
      />
    </Container>
  );
}
