import tw from "tailwind-styled-components";
import { ButtonProps } from ".";

export const Button = tw.button<ButtonProps>`
    flex items-center justify-center rounded-full

    ${(props) => !props.loading && "hover:opacity-75"}
    ${(props) => props.fullWidth && "w-full"}
    ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
    ${(props) =>
      props.onlyBorder
        ? `border bg-transparent text-[#1351B4] ${
            props.bg === "white" ? "border-white" : `border-[#1351B4]`
          }`
        : props.bg === "white"
        ? "bg-white text-[#1351B4]"
        : "bg-[#1351B4] text-white"}
    ${(props) => {
      if (props.size === "small") {
        return props.minimal || props.loading ? "p-2" : "py-1 px-2";
      } else if (props.size === "medium") {
        return props.minimal || props.loading ? "p-3" : "py-2 px-4";
      } else if (props.size === "large") {
        return props.minimal || props.loading ? "p-4" : "py-4 px-6";
      }
    }}
`;

export const TextArea = tw.span<Pick<ButtonProps, "icon" | "minimal">>`
    font-bold 
    ${(props) => props.icon && "ml-2"}
    ${(props) => props.minimal && "hidden"}
`;

export const Icon = tw.div`
    w-5 h-5
`;
