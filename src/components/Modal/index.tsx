import Button from "../Button";
import * as S from "./styles";

type ModalProps = {
  text: string;
};

const Modal = ({ text }: ModalProps) => {
  return (
    <S.Container>
      <S.SectionHead>
        <S.Title>Título</S.Title>
      </S.SectionHead>
      <S.SectionContent>
        <S.Text>{text}</S.Text>
      </S.SectionContent>
      <S.GroupButtons>
        <S.ContainerButton>
          <Button bg="blue" text="Label" fullWidth onlyBorder />
        </S.ContainerButton>
        <S.ContainerButton>
          <Button bg="blue" text="Label" fullWidth />
        </S.ContainerButton>
      </S.GroupButtons>
    </S.Container>
  );
};

export default Modal;
