import { useState } from "react";
import { getMessageInfo } from "../../utils/methods/getComponentInfo";
import Close from "../../utils/icons/Close";

export type MessageProps = {
  typeMessage?: "success" | "warning" | "error" | "info";
};

const Message = ({ typeMessage = "success" }: MessageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  const { typeMessageFeedback, typeIcon, messageFeedback } = getMessageInfo(
    typeMessage,
    false
  );

  return (
    <div>
      {isVisible && (
        <>
          <div
            className={`relative flex items-center justify-between w-full py-6 px-4 ${typeMessageFeedback}`}
          >
            <div className="flex items-center">
              <div className="w-6 h-6">{typeIcon}</div>
              <div className="text-lg mx-4 text-black">{messageFeedback}</div>
            </div>
            <div className="absolute top-0 right-0 m-3">
              <div className="w-4 h-4 cursor-pointer" onClick={handleClick}>
                <Close />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
