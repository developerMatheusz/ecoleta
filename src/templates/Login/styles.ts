import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full h-screen flex flex-col
`;

export const GroupItems = tw.div`
  w-full h-full flex items-center
`;

export const ContainerBackground = tw.div`
  w-3/5 h-full border border-4 border-green-500
`;

export const AreaBackground = tw.div`
  pl-16 pr-8 pt-8
`;

export const ContainerForm = tw.div`
  w-2/5 h-full border border-4 border-red-500
`;

export const AreaForm = tw.div`
  mt-8 mr-20 shadow-md border-t border-gray-100/50
`;
