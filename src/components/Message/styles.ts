import tw from "tailwind-styled-components";
import { MessageProps } from ".";

const mapPropertiesToStyles = (properties: MessageProps) => {
  switch (properties.typeMessage) {
    case "warning":
      return "bg-amber-300/25";
    case "error":
      return "bg-red-300/25 text-red-700";
    case "info":
      return "bg-blue-300/25 text-[#1351B4]";
    default:
      return "bg-green-300/25 text-green-700";
  }
};

export const Container = tw.div<MessageProps>`
  relative flex items-center justify-between w-full py-6 px-4 cursor-pointer
  ${(props) => mapPropertiesToStyles(props)}
`;

export const SectionContent = tw.div`
  flex items-center
`;

export const SectionIcon = tw.div`
  absolute top-0 right-0 m-3
`;

type ContainerIconProps = {
  size?: "normal" | "large";
};

export const ContainerIcon = tw.div<ContainerIconProps>`
  ${(props) => (props.size === "normal" ? "w-4 h-4" : "w-6 h-6")}
`;

export const Span = tw.span`
  text-lg mx-4 text-black
`;
