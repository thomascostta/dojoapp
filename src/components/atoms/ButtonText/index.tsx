import { useTheme } from "styled-components";
import { Container, Touchable, Title, Content } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

interface PropsButtonNewUser {
  marginTop?: number;
  marginBotton?: number;
  onPress: () => void;
  hasIcon?: boolean;
  label: string;
  hasIconToColorLabel?: boolean;
}

export function ButtonText({
  marginTop = 0,
  marginBotton = 0,
  hasIcon = false,
  onPress,
  label,
}: PropsButtonNewUser) {
  const theme = useTheme();

  return (
    <Container marginTop={marginTop} marginBotton={marginBotton}>
      <Touchable onPress={onPress}>
        <Content>
          <Title hasIconToColorLabel={hasIcon}>{label}</Title>
          {hasIcon && (
            <FontAwesome5
              name="user-ninja"
              size={20}
              color={theme.colors.orange.third}
            />
          )}
        </Content>
      </Touchable>
    </Container>
  );
}
