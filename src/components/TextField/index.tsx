"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import Label from "../Label";
import Icon from "../Icon";
import { getTextFieldProperties } from "./utils";
import { IMaskInput } from "react-imask";
import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  error?: string;
  focus?: string;
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
  type,
  error,
  focus
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
          {label === "CPF" ? (
            <IMaskInput
              mask="000.000.000-00"
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              {...(label ? { id: name } : {})}
              type={type}
              className={`italic-placeholder bg-transparent text-base text-black focus:outline-none ml-2 resize-none w-full ${
                isDisabled && "opacity-50 cursor-not-allowed"
              }`}
              autoFocus={focus === "true" ? true : false}
            />
          ) : (
            <S.Input
              onChange={onChange}
              value={value}
              disabled={isDisabled}
              {...(label ? { id: name } : {})}
              placeholder={placeholder}
              type={type}
              autoFocus={focus === "true" ? true : false}
            />
          )}
        </S.ContainerInput>
        {!!error && <span className="text-red-500 py-2">{error}</span>}
      </S.Section>
      <S.TagMessageArea>{tagMessage}</S.TagMessageArea>
    </S.Container>
  );
};

export default TextField;
