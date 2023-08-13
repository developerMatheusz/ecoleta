import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  bg?: "blue" | "white";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  text?: string;
} & ButtonTypes;

const Button = ({
  size = "medium",
  bg = "white",
  fullWidth = false,
  minimal = false,
  icon,
  text
}: ButtonProps) => {
  let sizeButton = "";

  switch (size) {
    case "small":
      sizeButton = `${minimal ? "p-2" : "py-1 px-2"} text-sm`;
      break;
    case "large":
      sizeButton = `${minimal ? "p-4" : "py-4 px-6"} text-xl`;
      break;
    default:
      sizeButton = `${minimal ? "p-3" : "py-2 px-4"} text-lg`;
  }

  return (
    <button
      className={`flex items-center justify-center rounded-full ${
        bg === "white" ? "bg-white text-blue-gov" : "bg-blue-gov text-white"
      } ${sizeButton} ${fullWidth && "w-full"}`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className={`font-bold ml-2 ${minimal && "hidden"}`}>{text}</span>
    </button>
  );
};

export default Button;
