import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { getButtonInfo } from "../../utils/methods/getComponentInfo";
import Spinner from "../Spinner";

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
} & ButtonTypes;

const Button = ({
  size = "medium",
  bg = "white",
  fullWidth = false,
  minimal = false,
  icon,
  text,
  disabled = false,
  loading = false
}: ButtonProps) => {
  const buttonClass = getButtonInfo({
    loading,
    bg,
    size,
    fullWidth,
    disabled,
    minimal
  });

  return (
    <button className={buttonClass} disabled={disabled}>
      {loading ? (
        <Spinner bg={bg} />
      ) : (
        <>
          {icon && <div className="w-5 h-5">{icon}</div>}
          <span
            className={classNames(
              "font-bold",
              icon && "ml-2",
              minimal && "hidden"
            )}
          >
            {text}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
