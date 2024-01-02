import { useState } from "react";
import { Container, ContentCheckbox } from "./styles";
import { ButtonAccess } from "../../atoms/ButtonAccess";
import { Checkbox } from "../../atoms/Checkbox";
import { LabelText } from "../../atoms/LabelText";

interface ICheckoutTermsUseProps {
  onPressButton: () => void;
}

export function CheckoutTermsUse({ onPressButton }: ICheckoutTermsUseProps) {
  const [isButtonVisible, setButtonVisible] = useState(false);

  return (
    <Container>
      <ContentCheckbox>
        <Checkbox checked={isButtonVisible} setChecked={setButtonVisible} />
        <LabelText text="Li e aceito os Termos da KarateApp" textAlign="left" />
      </ContentCheckbox>
      <ButtonAccess
        type="accessApp"
        onPress={onPressButton}
        disabled={!isButtonVisible}
      />
    </Container>
  );
}
