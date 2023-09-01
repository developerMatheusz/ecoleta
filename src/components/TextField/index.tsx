"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import Label from "../Label";
import Icon from "../Icon";
import { getTextFieldProperties } from "./utils";
import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const TextField = ({
  onInputChange,
  label,
  initialValue,
  disabled: isDisabledProp,
  icon,
  name,
  placeholder,
  typeMessage,
  type
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const { tagMessage, disabled: isDisabledMessage } = getTextFieldProperties(
    typeMessage!
  );

  const isDisabled = isDisabledProp || isDisabledMessage;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Container>
      <S.Section isDisabled={isDisabled}>
        {!!label && <Label name={name} disabled={isDisabled} label={label} />}
        <S.ContainerInput typeMessage={typeMessage} isDisabled={isDisabled}>
          {!!icon && <Icon disabled={isDisabled} icon={icon} />}
          <S.Input
            onChange={onChange}
            value={value}
            disabled={isDisabled}
            {...(label ? { id: name } : {})}
            placeholder={placeholder}
            type={type}
          />
        </S.ContainerInput>
      </S.Section>
      <S.TagMessageArea>{tagMessage}</S.TagMessageArea>
    </S.Container>
  );
};

export default TextField;
