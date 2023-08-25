import tw from "tailwind-styled-components";

export const Container = tw.div`
  bg-[#071D41] text-white flex flex-col items-center
`;

export const Image = tw.img`
  w-44
`;

export const ContentSmallScreen = tw.div`
  flex items-center justify-between
`;

export const GroupSmallScreen = tw.div`
  flex items-center
`;

export const ContainerImage = tw.div`
  w-full flex items-start justify-start px-5 pt-5
`;

type SectionContentProps = {
  isSmallScreen?: boolean;
};

export const SectionContent = tw.div<SectionContentProps>`
  flex items-center justify-center gap-4 w-full my-10 p-5
  ${(props) => props.isSmallScreen && "flex-col"}
`;

export const GroupContent = tw.div<SectionContentProps>`
  flex flex-col gap-6 w-52 cursor-pointer
  ${(props) =>
    props.isSmallScreen && "w-full border-t border-b border-gray-300 py-4"}
`;

export const Span = tw.span`
  font-semibold
`;

export const Text = tw.div`
  text-sm text-[#C5D4EB] hover:text-[#1351B4]
`;

export const SectionFooter = tw.div`
  flex items-center justify-between w-full p-5
`;

export const SectionCopyright = tw.div`
  flex flex-col items-center text-center justify-center gap-1 w-full p-5 text-sm font-light
`;

export const GroupItems = tw.div`
  flex flex-col items-start
`;

export const GroupIcons = tw.div`
  flex items-center gap-2 my-4
`;

export const ContainerIcon = tw.div`
  w-6 h-6 text-white
`;

export const ContainerArrow = tw.div`
  w-4 h-4 text-white
`;

export const Paragraph = tw.p`
  flex items-center justify-center text-white hover:text-[#1351B4] font-bold
`;

export const GroupFooter = tw.div`
  bg-[#04132a] text-gray-300 w-full
`;
