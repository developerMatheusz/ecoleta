import tw from "tailwind-styled-components";
import { HeaderProps } from ".";

type ContainerProps = {
  typeHeader?: "normal" | "login";
};

export const Container = tw.div<ContainerProps>`
  flex flex-col py-4 px-14 bg-white w-full

  ${(props) => (props.typeHeader === "normal" ? "px-14" : "px-2 shadow-md")}
`;

export const SectionHeader = tw.div`
  flex flex-col items-center justify-start
`;

export const Image = tw.img`
  w-44
`;

export const GroupItems = tw.div<Pick<HeaderProps, "typeHeader">>`
  flex items-center justify-between

  ${(props) => (props.typeHeader === "normal" ? "mb-5" : "mb-0")}
`;
