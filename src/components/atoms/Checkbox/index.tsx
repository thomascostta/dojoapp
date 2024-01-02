import { CheckboxProps } from "expo-checkbox";
import { Container } from "./styles";
import { useTheme } from "styled-components";

interface ICheckboxProps extends CheckboxProps {
  setChecked: (value: boolean) => void;
  checked: boolean;
}

export function Checkbox({
  checked = false,
  setChecked,
  ...rest
}: ICheckboxProps) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      value={checked}
      onValueChange={() => setChecked(!checked)}
      color={checked ? theme.colors.orange.secondary : undefined}
    />
  );
}