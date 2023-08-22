import tw from "tailwind-styled-components";
import { AvatarProps } from ".";

export const Container = tw.div`
  bg-[#DBE8FB] flex items-center justify-center p-2 rounded-full inline-block overflow-hidden relative
`;

export const ContainerIcon = tw.div<Pick<AvatarProps, "size">>`
  w-12 h-12 pt-2 text-[#C5D4EB]
  ${(props) => {
    if (props.size === "small") {
      return "w-8 h-8";
    } else if (props.size === "medium") {
      return "w-14 h-14";
    } else {
      return "w-20 h-20";
    }
  }}
`;

type ExtraItemProps = {
  isFileNearby: boolean;
  isFileOver: boolean;
};

export const ExtraItem = tw.div<ExtraItemProps>`
  absolute inset-0

  ${(props) =>
    (props.isFileNearby && !props.isFileOver && "bg-[#1351B4] opacity-40") ||
    (props.isFileOver && "bg-[#1351B4] opacity-90")}
`;

export const ContainerUpload = tw.div`
  absolute inset-0 flex items-center justify-center
`;
