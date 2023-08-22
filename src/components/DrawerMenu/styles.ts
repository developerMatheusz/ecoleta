import tw from "tailwind-styled-components";

type ContainerProps = {
  isOpen?: boolean;
};

export const Container = tw.div<ContainerProps>`
  flex flex-col items-start w-full gap-4 py-2
  ${(props) => !props.isOpen && "hidden"}
`;
