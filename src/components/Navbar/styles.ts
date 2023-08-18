import tw from "tailwind-styled-components";

export const Navbar = tw.nav`
  flex flex-col items-center justify-center
`;

export const GroupItems = tw.div`
  text-[#1351B4] flex items-center
`;

export const Divider = tw.div`
  border-r h-8 border-gray-300
`;

export const ContainerBtnLogin = tw.div`
  ml-4
`;

export const ContainerBtnContrast = tw.div`
  mx-1 flex flex-col items-center
`;

export const AreaLink = tw.div`
  mx-2 hover:text-blue-900
`;

export const ContainerMenuSmall = tw.div`
  flex flex-col absolute bg-white mt-10 p-2 pr-20 text-sm shadow-lg gap-3 rounded
`;
