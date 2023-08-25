import { TextFieldProps } from "../TextField";
import tw from "tailwind-styled-components";

export const Container = tw.div<Pick<TextFieldProps, "disabled">>`
  w-6 h-6 text-gray-400
  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
`;
