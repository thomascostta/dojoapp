import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Container } from "./styles";

export function ButtonClose({ ...rest }: TouchableOpacityProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="window-close"
        size={24}
        color={theme.colors.orange.secondary}
      />
    </Container>
  );
}
