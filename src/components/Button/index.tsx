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
  let sizeButton = "";

  switch (size) {
    case "small":
      sizeButton = `${
        minimal ? "p-2" : `${loading ? "p-2" : "py-1 px-2"}`
      } text-sm`;
      break;
    case "large":
      sizeButton = `${
        minimal ? "p-4" : `${loading ? "p-4" : "py-4 px-6"}`
      } text-xl`;
      break;
    default:
      sizeButton = `${
        minimal ? "p-3" : `${loading ? "p-3" : "py-2 px-4"}`
      } text-lg`;
  }

  return (
    <button
      className={`flex items-center justify-center rounded-full ${
        !loading && "hover:opacity-75"
      } ${
        bg === "white" ? "bg-white text-[#1351B4]" : "bg-[#1351B4] text-white"
      } ${sizeButton} ${fullWidth && "w-full"} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {loading ? (
        <div
          className={`inline-block w-5 h-5 animate-spin rounded-full border-2 border-solid ${
            bg === "white" ? "border-[#1351B4]" : "border-white"
          } border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
          role="status"
        />
      ) : (
        <>
          {icon && <div className="w-5 h-5">{icon}</div>}
          <span
            className={`font-bold ${icon && "ml-2"} ${minimal && "hidden"}`}
          >
            {text}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
