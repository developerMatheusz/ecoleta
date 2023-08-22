import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex items-center justify-center inline-block
`;

export const ListItems = tw.ul`
  flex items-center justify-center gap-2
`;

export const Item = tw.li`
  flex items-center justify-center
`;

export const ContainerIcon = tw.div`
  px-0.5 pt-1 rounded-full w-7 h-7 text-[#1351B4] mr-2 hover:bg-[#1351B4]/25
`;
