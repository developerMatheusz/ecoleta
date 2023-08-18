import tw from "tailwind-styled-components";
import { MessageProps } from "../Message";

const mapPropertiesToStyles = (properties: MessageProps) => {
  switch (properties.typeMessage) {
    case "warning":
      return "bg-amber-400 text-black";
    case "error":
      return "bg-red-600 text-white";
    case "info":
      return "bg-[#1351B4] text-white";
    default:
      return "bg-green-700 text-white";
  }
};

export const Container = tw.div<MessageProps>`
  flex items-center justify-center p-1 inline-flex
  ${(props) => mapPropertiesToStyles(props)}
`;

export const ContainerIcon = tw.div`
  w-6 h-6 mr-1
`;

export const TextArea = tw.div`
  text-lg
`;
