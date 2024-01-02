import { FlatList } from "react-native";
import { useTheme } from "styled-components";

import { usePayments } from "../../context/payments";

import { Container, BackgroundContainer, Gradiente } from "./styles";
import { CardItem } from "../../components/atoms/CardItem";
import { HeaderHome } from "../../components/atoms/HeaderHome";

export function HomeScreen() {
  const theme = useTheme();
  const { datePayments } = usePayments();

  const current = new Date();

  const threeMonthsFromToday = new Date(
    current.getFullYear(),
    current.getMonth() + 4,
    current.getDate()
  );

  const filteredPayments = datePayments.filter((item) => {
    if (typeof item.referenceDate === "string") {
      const dateParts = item.referenceDate.split("/").map(Number);

      if (dateParts.length === 3 && !dateParts.some(isNaN)) {
        const paymentDate = new Date(
          dateParts[0],
          dateParts[1] - 1,
          dateParts[2]
        );

        if (!isNaN(paymentDate.getTime())) {
          paymentDate.setHours(0, 0, 0, 0);
          return paymentDate <= threeMonthsFromToday;
        } else {
          console.error("Erro ao converter data:", item.referenceDate);
        }
      } else {
        console.error("Formato de data inválido:", item.referenceDate);
      }
    } else {
      console.error("item.referenceDate não é uma string:", item.referenceDate);
    }

    return false;
  });

  return (
    <BackgroundContainer source={theme.images.background}>
      <Container>
        <HeaderHome />
        <FlatList
          data={filteredPayments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardItem
              paymentStatus={item.paymentStatus}
              date={item.referenceDate}
              payDay={item.payDay}
            />
          )}
        />
        <Gradiente
          colors={["transparent", theme.colors.red.primary]}
          locations={[0.4, 1]}
        />
      </Container>
    </BackgroundContainer>
  );
}
