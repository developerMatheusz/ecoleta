import { TextFieldProps } from "../TextField";
import tw from "tailwind-styled-components";

export const Container = tw.div<Pick<TextFieldProps, "disabled">>`
  w-5 h-5 text-gray-400
  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
`;
