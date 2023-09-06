import tw from "tailwind-styled-components";
import { AvatarProps } from ".";

export const Container = tw.div`
  bg-gray-900/25 flex items-center justify-center p-2 rounded-full inline-block overflow-hidden relative
`;

export const ContainerIcon = tw.div<Pick<AvatarProps, "size">>`
  w-12 h-12 text-white flex items-center justify-center
  ${(props) => {
    if (props.size === "small") {
      return "w-5 h-5";
    } else if (props.size === "medium") {
      return "w-10 h-10";
    } else {
      return "w-14 h-14";
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
