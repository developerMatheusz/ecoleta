import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";

export const getTextAreaProperties = (
  typeMessage: MessageProps["typeMessage"]
) => {
  const config = {
    warning: {
      tagMessage: <TagMessage typeMessage="warning" />,
      colorMessage: "border-amber-400",
      disableTextarea: true
    },
    error: {
      tagMessage: <TagMessage typeMessage="error" />,
      colorMessage: "border-red-600",
      disableTextarea: false
    },
    info: {
      tagMessage: <TagMessage typeMessage="info" />,
      colorMessage: "border-blue-600",
      disableTextarea: false
    },
    success: {
      tagMessage: <TagMessage typeMessage="success" />,
      colorMessage: "border-green-600",
      disableTextarea: false
    },
    default: {
      tagMessage: null,
      colorMessage: "border-gray-400",
      disableTextarea: false
    }
  };

  return config[typeMessage!] || config.default;
};
