import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, ImageLogo, ContentIcon } from "./styles";
import JapanImage from "../../../assets/japan.png";

interface IHeaderProps {
  isIcon?: boolean;
  onPress?: () => void;
}

export function Header({ onPress, isIcon = false }: IHeaderProps) {
  const theme = useTheme();
  return (
    <Container>
      <ImageLogo source={JapanImage} />

      <ContentIcon onPress={onPress}>
        {isIcon && (
          <MaterialCommunityIcons
            name="logout"
            size={24}
            color={theme.colors.orange.primary}
          />
        )}
      </ContentIcon>
    </Container>
  );
}
