import Hamburguer from "../../utils/icons/Hamburguer";
import Button, { ButtonProps } from "../Button";
import * as S from "./styles";

const Menu = ({ text }: Pick<ButtonProps, "text">) => {
  return (
    <S.Container>
      <Button bg="white" size="medium" icon={<Hamburguer />} minimal />
      <S.ContainerText>
        <S.Span>{text}</S.Span>
      </S.ContainerText>
    </S.Container>
  );
};

export default Menu;
