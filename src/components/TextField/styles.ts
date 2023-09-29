import tw from "tailwind-styled-components";
import { MessageProps } from "../Message";
import { TextFieldProps } from ".";

const mapPropertiesToStyles = (properties: MessageProps) => {
  switch (properties.typeMessage) {
    case "warning":
      return "border-amber-400";
    case "error":
      return "border-red-600";
    case "info":
      return "border-blue-600";
    case "success":
      return "border-green-600";
    default:
      return "border-gray-400";
  }
};

export const Container = tw.div`
  flex flex-col
`;

type SectionProps = {
  isDisabled?: boolean;
};

export const Section = tw.div<SectionProps>`
  flex flex-col

  ${(props) => props.isDisabled && "opacity-50 cursor-not-allowed"}
`;

type ContainerInputProps = {
  isDisabled?: boolean;
} & Pick<MessageProps, "typeMessage">;

export const ContainerInput = tw.div<ContainerInputProps>`
  flex items-center p-2 border rounded bg-white

  ${(props) => mapPropertiesToStyles(props)}
  ${(props) => props.isDisabled && "opacity-50 cursor-not-allowed"}
`;

export const TagMessageArea = tw.div`
  py-2 inline-flex
`;

export const Input = tw.input<Pick<TextFieldProps, "disabled">>`
  italic-placeholder bg-transparent text-base text-black focus:outline-none ml-2 resize-none w-full

  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
`;
