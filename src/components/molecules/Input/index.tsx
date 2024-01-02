import { MaskInputProps, Masks } from "react-native-mask-input";
import { LabelText } from "../../atoms/LabelText";
import { Container, Content, InputTextMask } from "./styles";

interface ITextInputPropsProps extends MaskInputProps {
  textLabel?: string;
  isError?: boolean;
  marginBottom?: number;
  type?: ITypeMaskProps;
  editable?: boolean;
}

type ITypeMaskProps =
  | "type_CPF"
  | "type_phone"
  | "type_birthday"
  | "type_currency"
  | undefined
  | string;

export function Input({
  textLabel,
  isError,
  marginBottom = 0,
  type,
  editable = true,
  ...rest
}: ITextInputPropsProps) {
  function getMaskType(type: ITypeMaskProps) {
    if (type === "type_CPF") {
      return Masks.BRL_CPF;
    }
    if (type === "type_phone") {
      return Masks.BRL_PHONE;
    }
    if (type === "type_birthday") {
      return Masks.DATE_DDMMYYYY;
    }
    if (type === "type_currency") {
      return Masks.BRL_CURRENCY;
    } else {
      return undefined;
    }
  }

  return (
    <Container marginBottom={marginBottom}>
      {textLabel !== undefined && textLabel?.length > 2 && (
        <LabelText text={textLabel} />
      )}
      <Content isError={isError} editable={editable}>
        <InputTextMask {...rest} mask={getMaskType(type)} editable={editable} />
      </Content>
    </Container>
  );
}
