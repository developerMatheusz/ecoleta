import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-col items-center bg-white p-4 w-full
`;

export const Circle = tw.div`
  bg-amber-400 rounded-full p-1.5 mr-1
`;

export const DateTime = tw.div`
  flex items-center justify-start font-light w-full text-sm ml-8
`;

export const SectionContent = tw.div`
  my-5 w-full ml-12 mr-4
`;

export const Text = tw.span`
  font-light
`;
