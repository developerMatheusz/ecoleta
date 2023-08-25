"use client";

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Spinner from "../Spinner";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  size?: ButtonSize;
  bg?: "blue" | "white";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onlyBorder?: boolean;
  toggleMenu?: () => void;
} & ButtonTypes;

const Button = ({
  size = "medium",
  bg = "white",
  fullWidth = false,
  minimal = false,
  icon,
  text,
  disabled = false,
  loading = false,
  onlyBorder,
  toggleMenu
}: ButtonProps) => {
  return (
    <S.Button
      loading={loading}
      onlyBorder={onlyBorder}
      fullWidth={fullWidth}
      disabled={disabled}
      size={size}
      bg={bg}
      minimal={minimal}
      onClick={toggleMenu}
    >
      {loading ? (
        <Spinner bg={bg} />
      ) : (
        <>
          {icon && <S.Icon>{icon}</S.Icon>}
          <S.TextArea icon={icon} minimal={minimal}>
            {text}
          </S.TextArea>
        </>
      )}
    </S.Button>
  );
};

export default Button;
