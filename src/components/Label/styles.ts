import tw from "tailwind-styled-components";
import { LabelProps } from ".";

export const Label = tw.label<Pick<LabelProps, "name" | "disabled">>`
  w-full text-lg
  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
`;
