"use client";

import { SectionHead, Title } from "../Modal/styles";
import * as S from "./styles";

export type NotificationProps = {
  title: string;
  text: string;
  date: Date;
};

const Notification = ({ title, text, date }: NotificationProps) => {
  const adjustedDate = new Date(date.getTime() - 4 * 60 * 60 * 1000);
  const formattedDate = `${adjustedDate
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/")} às ${adjustedDate.toISOString().split("T")[1].slice(0, 5)}`;

  return (
    <S.Container>
      <SectionHead>
        <S.Circle />
        <Title>{title}</Title>
      </SectionHead>
      <S.DateTime>{formattedDate}</S.DateTime>
      <S.SectionContent>
        <S.Text>{text}</S.Text>
      </S.SectionContent>
    </S.Container>
  );
};

export default Notification;
