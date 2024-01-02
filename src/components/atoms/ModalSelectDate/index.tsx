import { Container, Title, TouchableSelectDate } from "./styles";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (selectedDate: number) => void;
}

export function ModalSelectDate({
  isOpen,
  onClose,
  onSelectDate,
}: ModalComponentProps) {
  const dateOptions = [1, 5, 10, 15, 20, 25, 28];

  const handleSelectDate = (selectedDate: number) => {
    onSelectDate(selectedDate);
    onClose();
  };

  return (
    <Container isOpen={isOpen} onClosed={onClose}>
      {dateOptions.map((date) => (
        <TouchableSelectDate key={date} onPress={() => handleSelectDate(date)}>
          <Title>{date}</Title>
        </TouchableSelectDate>
      ))}
    </Container>
  );
}
