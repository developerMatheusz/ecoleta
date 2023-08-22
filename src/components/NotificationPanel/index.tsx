import { useState } from "react";
import Link from "next/link";
import Close from "../../utils/icons/Close";
import Notification, { NotificationProps } from "../Notification";
import { SectionHead, Title } from "../Modal/styles";
import * as S from "./styles";

type NotificationPanelProps = {
  name: string;
  email: string;
  notification: NotificationProps[];
};

const NotificationPanel = ({
  name,
  email,
  notification
}: NotificationPanelProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <S.Container>
          <S.GroupHead>
            <S.ContainerHead>
              <SectionHead>
                <Title>{name}</Title>
              </SectionHead>
              <S.SectionEmail>
                <Link href="#">{email}</Link>
              </S.SectionEmail>
            </S.ContainerHead>
            <S.ContainerIcon onClick={handleClick}>
              <Close />
            </S.ContainerIcon>
          </S.GroupHead>
          <S.GroupBody>
            {notification &&
              notification.map((notify, index) => (
                <>
                  <S.Divider />
                  <Notification
                    key={index}
                    title={notify.title}
                    date={notify.date}
                    text={notify.text}
                  />
                </>
              ))}
          </S.GroupBody>
        </S.Container>
      )}
    </>
  );
};

export default NotificationPanel;
