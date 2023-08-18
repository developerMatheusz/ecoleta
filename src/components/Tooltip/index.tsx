import { MessageProps } from "../Message";
import { getTooltipProperties } from "./utils";
import * as S from "./styles";

const Tooltip = ({ typeMessage }: MessageProps) => {
  const { title, subtitle } = getTooltipProperties(typeMessage!);

  return (
    <S.Container>
      <S.Head typeMessage={typeMessage}>
        <S.Section>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Section>
      </S.Head>
      <S.DownArrow typeMessage={typeMessage} />
    </S.Container>
  );
};

export default Tooltip;
