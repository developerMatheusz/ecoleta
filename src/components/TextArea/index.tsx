import { TextareaHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import { getTextAreaProperties } from "./utils";
import Label from "../Label";
import * as S from "./styles";

export type TextAreaProps = {
  onTextareaChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  Pick<MessageProps, "typeMessage">;

const TextArea = ({
  onTextareaChange,
  label,
  initialValue,
  disabled,
  name,
  placeholder,
  typeMessage
}: TextAreaProps) => {
  const [value, setValue] = useState(initialValue);

  const { tagMessage, colorMessage, disableTextarea } =
    getTextAreaProperties(typeMessage);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onTextareaChange && onTextareaChange(newValue);
  };

  return (
    <S.Container>
      {!!label && (
        <Label name={name} disabled={disabled || disableTextarea}>
          {label}
        </Label>
      )}
      <S.InputTextArea
        onChange={onChange}
        value={value}
        disabled={disabled || disableTextarea}
        {...(label ? { id: name } : {})}
        placeholder={placeholder}
        colorMessage={colorMessage}
        disableTextarea={disableTextarea}
      />
      <S.TextArea>{tagMessage}</S.TextArea>
    </S.Container>
  );
};

export default TextArea;
