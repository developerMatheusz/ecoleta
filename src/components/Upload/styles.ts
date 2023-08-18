import tw from "tailwind-styled-components";
import { UploadProps } from ".";
import { MessageProps } from "../Message";

const mapPropertiesToStyles = (properties: MessageProps) => {
  switch (properties.typeMessage) {
    case "warning":
      return "border-amber-500";
    case "error":
      return "border-red-600";
    case "info":
      return "border-[#1351B4]";
    case "success":
      return "border-green-600";
    default:
      return "border-[#1351B4]";
  }
};

export const Container = tw.div``;

export const Head = tw.div<Pick<UploadProps, "disabled">>`
  flex flex-col pb-5

  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
`;

type GroupItemsProps = {
  invalidFile?: boolean;
  disabled?: boolean;
} & Pick<MessageProps, "typeMessage">;

export const GroupItems = tw.div<GroupItemsProps>`
  flex items-center border-dashed bg-white rounded px-6 py-4 border border-2
  ${(props) => mapPropertiesToStyles(props)}
  ${(props) => props.invalidFile && "border-red-600"}
  ${(props) =>
    (props.disabled || props.typeMessage === "warning") &&
    "opacity-50 cursor-not-allowed"}
`;

export const Span = tw.span`
  text-lg italic font-light pl-6
`;

export const ContainerIcon = tw.div`
  w-6 h-6
`;

export const Section = tw.div`
  flex items-center w-full text-[#1351B4]
`;

type InputProps = {
  disabled?: boolean;
} & Pick<MessageProps, "typeMessage">;

export const Input = tw.input<InputProps>`
  hidden
  ${(props) =>
    (props.disabled || props.typeMessage === "warning") &&
    "opacity-50 cursor-not-allowed"}
`;

export const ContainerTagMessage = tw.div`
  mb-5
`;
