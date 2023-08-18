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
    case "success":
      return "bg-green-600 text-white";
  }
};

export const Container = tw.div`
  relative inline-block
`;

export const Head = tw.div<Pick<MessageProps, "typeMessage">>`
  p-2 rounded
  ${(props) => mapPropertiesToStyles(props)}
`;

export const Section = tw.div`
  flex flex-col items-center justify-center
`;

export const Title = tw.span`
  text-lg
`;

export const Subtitle = tw.span`
  font-light text-base
`;

export const DownArrow = tw.div<Pick<MessageProps, "typeMessage">>`
  absolute w-4 h-4 transform rotate-45 -translate-y-2/3 left-1/2
  ${(props) => mapPropertiesToStyles(props)}
`;
