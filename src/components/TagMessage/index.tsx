import { MessageProps } from "../Message";
import { getMessageInfo } from "../../utils/methods/getComponentInfo";

const TagMessage = ({ typeMessage }: Pick<MessageProps, "typeMessage">) => {
  const { typeMessageFeedback, typeIcon, messageFeedback } = getMessageInfo(
    typeMessage,
    true
  );

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
