import tw from "tailwind-styled-components";

export const Container = tw.div`
  animate-pulse
`;

type ColumnLoaderProps = {
  size?: "extraSmall" | "small" | "medium" | "large";
};

export const ColumnLoader = tw.div<ColumnLoaderProps>`
  h-2 bg-gray-300 mb-2
  ${(props) => {
    if (props.size === "extraSmall") {
      return "w-1/2";
    } else if (props.size === "small") {
      return "w-2/3";
    } else if (props.size === "medium") {
      return "w-4/5";
    } else {
      return "w-6/7";
    }
  }}
`;
