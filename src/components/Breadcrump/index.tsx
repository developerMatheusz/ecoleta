import Link from "next/link";
import House from "../../utils/icons/House";
import RightArrowLight from "../../utils/icons/RightArrowLight";
import * as S from "./styles";

type Item = {
  label: string;
  url?: string;
};

type BreadcrumpProps = {
  items: Item[];
};

const Breadcrump = ({ items }: BreadcrumpProps) => {
  return (
    <S.Container>
      <S.ListItems>
        {items.map((item, index) => (
          <S.Item key={index}>
            {index === 0 ? (
              <S.ContainerIcon>
                <Link href={item.url ? item.url : "#"}>
                  <House />
                </Link>
              </S.ContainerIcon>
            ) : (
              <>
                {index !== items.length - 1 ? (
                  <a href={item.url} className="mr-2 text-[#1351B4]">
                    {item.label}
                  </a>
                ) : (
                  <span className="mr-2">{item.label}</span>
                )}
              </>
            )}
            {index !== items.length - 1 && (
              <span className="w-2 h-2 text-gray-300">
                <RightArrowLight />
              </span>
            )}
          </S.Item>
        ))}
      </S.ListItems>
    </S.Container>
  );
};

export default Breadcrump;
