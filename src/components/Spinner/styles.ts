import tw from "tailwind-styled-components";
import { ButtonProps } from "../Button";

export const Container = tw.div<Pick<ButtonProps, "bg">>`
  ${(props) => (props.bg === "white" ? "border-[#1351B4]" : "border-white")}

  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] inline-block w-5 h-5 animate-spin rounded-full border-2 border-solid
`;
