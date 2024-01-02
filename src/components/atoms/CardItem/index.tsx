import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Title,
  TitleStatus,
  ContentTitle,
  ContentTitleStatus,
  ContentButton,
  ContainerTitle,
  ContentDate,
  TitleNumberDate,
  TitleDayWeek,
  ContainerIcon,
} from "./styles";

import {
  getMonthFormatted,
  getYearFormatted,
} from "../../../utils/functionsGetDate";

type StatusProps = "paid" | "latePayment" | "opened";

interface ICardItemProps {
  payDay: string;
  paymentStatus: "paid" | "notPaid";
  date: string;
}

export function CardItem({ paymentStatus, payDay, date }: ICardItemProps) {
  const month = getMonthFormatted(date);
  const year = getYearFormatted(date);

  const formattedDate = `${date.split("/")[2]}-${date.split("/")[1]}-${
    date.split("/")[0]
  }`;
  const currentDate = new Date();
  
  const getStatusText = (): string => {
    if (paymentStatus === "paid") return "Pago";
    
    const paymentDate = new Date(formattedDate);

    if (currentDate.getTime() > paymentDate.getTime() + 1) {
      return "Atrasado...";
    } else if (currentDate.getMonth() === paymentDate.getMonth() + 1 || currentDate.getMonth() < paymentDate.getMonth() + 1 ) {
      return "Em aberto";
    }
    return "";
  };


  const getColorStatus = (): StatusProps => {
    if (paymentStatus === "paid") return "paid";

    const paymentDate = new Date(formattedDate);

    if (currentDate.getTime() > paymentDate.getTime() + 1) {
      return "latePayment";
    } else if (currentDate.getMonth()+1 === paymentDate.getMonth() + 1 || currentDate.getMonth() < paymentDate.getMonth() + 1 ) {
      return "opened";
    }
    return "opened";
  };

  const renderIcon = (): JSX.Element | null => {
    if (paymentStatus === "paid")
      return <AntDesign name="like2" size={24} color="white" />;
    return null;
  };

  return (
    <Container>
      <ContentButton paymentStatus={getColorStatus()}>
        <ContainerTitle>
          <ContentTitle>
            <Title>{month}</Title>
          </ContentTitle>
          <ContentTitleStatus>
            <TitleStatus>{getStatusText()}</TitleStatus>
          </ContentTitleStatus>
        </ContainerTitle>
        <ContainerIcon>{renderIcon()}</ContainerIcon>
      </ContentButton>
      <ContentDate>
        <TitleNumberDate>{payDay}</TitleNumberDate>
        <TitleDayWeek>{`${month}/${year}`}</TitleDayWeek>
      </ContentDate>
    </Container>
  );
}
