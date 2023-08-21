import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-col items-center bg-white p-4 shadow-xl w-full
`;

export const SectionHead = tw.div`
  flex items-start justify-start w-full
`;

export const Title = tw.div`
  text-xl font-bold
`;

export const SectionContent = tw.div`
  my-5 w-full
`;

export const Text = tw.div`
  italic
`;

export const GroupButtons = tw.div`
  w-full flex items-center justify-end gap-4
`;

export const ContainerButton = tw.div`
  w-32 flex items-center
`;
