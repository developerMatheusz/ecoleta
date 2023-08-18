import tw from "tailwind-styled-components";
import { TextAreaProps } from ".";

export const Container = tw.div`
  flex flex-col
`;

export const TextArea = tw.span`
  py-2 inline-flex
`;

type InputTextAreaProps = {
  colorMessage: string;
  disableTextarea: boolean;
} & Pick<TextAreaProps, "disabled">;

export const InputTextArea = tw.textarea<InputTextAreaProps>`
  italic-placeholder rounded text-base text-black p-2 focus:outline-none resize-none h-32 border

  ${(props) => props.colorMessage && `${props.colorMessage}`}
  ${(props) =>
    (props.disabled || props.disableTextarea) &&
    "opacity-50 cursor-not-allowed"}
`;
