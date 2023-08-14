import { MessageProps } from "../Message";
import SuccessCircle from "../../utils/icon/SuccessCircle";
import ErrorCircle from "../../utils/icon/ErrorCircle";
import Info from "../../utils/icon/Info";
import Warning from "../../utils/icon/Warning";

const TagMessage = ({ typeMessage }: Pick<MessageProps, "typeMessage">) => {
  let typeMessageFeedback = "";
  let typeIcon;
  let messageFeedback = "";

  switch (typeMessage) {
    case "warning":
      typeMessageFeedback = "bg-amber-400 text-black";
      typeIcon = <Warning />;
      messageFeedback = "Campo desabilitado";
      break;
    case "error":
      typeMessageFeedback = "bg-red-600 text-white";
      typeIcon = <ErrorCircle />;
      messageFeedback = "Campo inválido";
      break;
    case "info":
      typeMessageFeedback = "bg-[#1351B4] text-white";
      typeIcon = <Info />;
      messageFeedback = "Campo informacional";
      break;
    default:
      typeMessageFeedback = "bg-green-700 text-white";
      typeIcon = <SuccessCircle />;
      messageFeedback = "Campo correto";
      break;
  }

  return (
    <div
      className={`flex items-center justify-center p-1 inline-flex ${typeMessageFeedback}`}
    >
      <div className="w-6 h-6 mr-1">{typeIcon}</div>
      <div className="text-lg">{messageFeedback}</div>
    </div>
  );
};

export default TagMessage;
