import { useEffect, useState } from "react";
import { Container, Title } from "./styles";

export function FooterInfo() {
  const [randomizedText, setRandomizedText] = useState<string>("");

  const textDojoKun = [
    "1° Dojo Kun: HITOTSU! JINKAKU\nKANSEI NI TSUTOMURU KOTO!",
    "2° Dojo Kun: HITOTSU! MAKOTO NO MICHI O MAMORU KOTO!",
    "3° Dojo Kun: HITOTSU! DORYOKU\nNO SEISHIN O YASHINAU KOTO!",
    "4° Dojo Kun: HITOTSU! REIGI O OMONZURU KOTO!",
    "5° Dojo Kun: HITOTSU! KEKKI NO YU O IMASHIMURU KOTO!",
  ];

  useEffect(() => {
    const getRandomText = () => {
      const randomIndex = Math.floor(Math.random() * textDojoKun.length);
      return textDojoKun[randomIndex];
    };

    setRandomizedText(getRandomText());
  }, []);

  return (
    <Container>
      <Title>
        © 2023 - KarateApp. {"\n"}
        {randomizedText}
      </Title>
    </Container>
  );
}
