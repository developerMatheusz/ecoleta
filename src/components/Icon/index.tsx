import { TextFieldProps } from "../TextField";
import * as S from "./styles";

const Icon = ({
  disabled: isDisabled,
  icon
}: Pick<TextFieldProps, "disabled" | "icon">) => {
  return <S.Container disabled={isDisabled}>{icon}</S.Container>;
};

export default Icon;
