import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex items-center
`;

export const GroupItems = tw.div`
  flex items-center justify-center gap-1 px-2 hover:bg-[#1351B4]/25 rounded-full cursor-pointer w-full
`;

export const ContainerAvatar = tw.div`
  pt-2
`;

export const TextArea = tw.div`
  font-bold text-sm text-black/75 text-left
`;

export const Text = tw.div`
  font-light text-black/75
`;

export const ContainerIcon = tw.div`
  text-[#1351B4]
`;
