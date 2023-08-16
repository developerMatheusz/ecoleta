import DownArrow from "../../utils/icons/DownArrow";
import Search from "../../utils/icons/Search";
import UpArrow from "../../utils/icons/UpArrow";

type MenuHeadProps = {
  typeMessageFeedback: string;
  toggleMenu: () => void;
  isOpen: boolean;
  disabled?: boolean;
};

const MenuHead = ({
  typeMessageFeedback,
  toggleMenu,
  isOpen,
  disabled
}: MenuHeadProps) => {
  return (
    <div
      className={`flex justify-between cursor-pointer px-4 py-2 border border-2 rounded ${typeMessageFeedback} ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${
        typeMessageFeedback === "border-amber-500" &&
        "opacity-50 cursor-not-allowed"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`flex items-center ${
          disabled && "opacity-50 cursor-not-allowed"
        } ${
          typeMessageFeedback === "border-amber-500" &&
          "opacity-50 cursor-not-allowed"
        }`}
      >
        <div className="w-6 h-6 mr-2 text-gray-400">
          <Search />
        </div>
        <div className="text-lg">Texto do item 01 + (1)</div>
      </div>
      {isOpen ? (
        <div
          className={`flex items-center ${
            disabled && "opacity-50 cursor-not-allowed"
          } ${
            typeMessageFeedback === "border-amber-500" &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          <div className="w-4 h-4 text-[#1351B4]">
            <UpArrow />
          </div>
        </div>
      ) : (
        <div
          className={`flex items-center ${
            disabled && "opacity-50 cursor-not-allowed"
          } ${
            typeMessageFeedback === "border-amber-500" &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          <div className="w-4 h-4 text-[#1351B4]">
            <DownArrow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuHead;
