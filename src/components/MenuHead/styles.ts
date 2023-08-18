import tw from "tailwind-styled-components";
import { MenuHeadProps } from ".";

export const Container = tw.div<
  Pick<MenuHeadProps, "typeMessageFeedback" | "disabled">
>`
  flex justify-between cursor-pointer px-4 py-2 border border-2 rounded
  ${(props) => props.typeMessageFeedback && props.typeMessageFeedback}
  ${(props) =>
    (props.disabled || props.typeMessageFeedback === "border-amber-500") &&
    "opacity-50 cursor-not-allowed"}
`;

export const SectionHead = tw.div<
  Pick<MenuHeadProps, "typeMessageFeedback" | "disabled">
>`
  flex items-center
  ${(props) =>
    (props.disabled || props.typeMessageFeedback === "border-amber-500") &&
    "opacity-50 cursor-not-allowed"}
`;

export const Span = tw.span`
  text-lg text-black ml-2
`;

type ContainerIconProps = {
  isBlue?: boolean;
  size?: "normal" | "large";
};

export const ContainerIcon = tw.div<ContainerIconProps>`
  ${(props) => props.isBlue && "text-[#1351B4]"}
  ${(props) => (props.size === "normal" ? "w-4 h-4" : "w-6 h-6")}
`;
