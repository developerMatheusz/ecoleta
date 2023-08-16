import { ButtonProps, ButtonSize } from "../../../components/Button";
import { ItemMenuProps } from "../../../components/ItemMenu";
import { MessageProps } from "../../../components/Message";
import TagMessage from "../../../components/TagMessage";
import Info from "../../icons/Info";
import Warning from "../../icons/Warning";
import Success from "../../icons/Success";
import Error from "../../icons/Error";
import classNames from "classnames";

const getSizeClassname = (
  size: ButtonProps["size"],
  minimal: boolean,
  loading: boolean
) => {
  const sizeMapping: Record<ButtonSize, string> = {
    small: minimal ? "p-2" : loading ? "p-2" : "py-1 px-2",
    medium: minimal ? "p-3" : loading ? "p-3" : "py-2 px-4",
    large: minimal ? "p-4" : loading ? "p-4" : "py-4 px-6"
  };

  return sizeMapping[size || "medium"];
};

export const getButtonInfo = ({
  loading,
  bg,
  size,
  minimal,
  fullWidth,
  disabled
}: ButtonProps): string => {
  const sizeButton = getSizeClassname(
    size || "medium",
    minimal || false,
    loading || false
  );

  return classNames(
    "flex items-center justify-center rounded-full",
    !loading && "hover:opacity-75",
    bg === "white" ? "bg-white text-[#1351B4]" : "bg-[#1351B4] text-white",
    sizeButton,
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed"
  );
};

export const getItemMenuInfo = ({
  typeItem = "selectOne",
  disabled = false
}: Pick<ItemMenuProps, "typeItem" | "disabled">) => {
  if (typeItem === "selectMultiples") {
    return classNames(
      "flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-0 checked:bg-[#2670E8] checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[0.18rem] checked:after:w-[1rem] checked:after:rotate-0 checked:after:bg-white checked:after:content-['']",
      disabled && "opacity-50 cursor-not-allowed"
    );
  } else {
    return classNames(
      "flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-gray-300 checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[1rem] checked:after:w-[0.575rem] checked:after:rotate-45 checked:pb-[0.3rem] checked:after:border-[0.225rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-[#2670E8]",
      disabled && "opacity-50 cursor-not-allowed"
    );
  }
};

export const getMessageInfo = (
  typeMessage: MessageProps["typeMessage"],
  isTagMessage: boolean
) => {
  if (isTagMessage) {
    switch (typeMessage) {
      case "warning":
        return {
          typeMessageFeedback: "bg-amber-400 text-black",
          typeIcon: <Warning />,
          messageFeedback: "Campo desabilitado"
        };
      case "error":
        return {
          typeMessageFeedback: "bg-red-600 text-white",
          typeIcon: <Error />,
          messageFeedback: "Campo inválido"
        };
      case "info":
        return {
          typeMessageFeedback: "bg-[#1351B4] text-white",
          typeIcon: <Info />,
          messageFeedback: "Campo informacional"
        };
      default:
        return {
          typeMessageFeedback: "bg-green-700 text-white",
          typeIcon: <Success />,
          messageFeedback: "Campo correto"
        };
    }
  } else {
    switch (typeMessage) {
      case "warning":
        return {
          typeMessageFeedback: "bg-amber-300/25",
          typeIcon: <Warning />,
          messageFeedback:
            "Atenção. Em caso de dúvida, não compartilhe sua senha com terceiros. Ligue para central de atendimento."
        };
      case "error":
        return {
          typeMessageFeedback: "bg-red-300/25 text-red-700",
          typeIcon: <Error />,
          messageFeedback:
            "Erro. Desculpe, nenhum resultado encontrado. Veja se houve algum erro de digitação."
        };
      case "info":
        return {
          typeMessageFeedback: "bg-blue-300/25 text-[#1351B4]",
          typeIcon: <Info />,
          messageFeedback:
            "Informação. Seus dados só serão salvos após o preenchimento do primeiro campo do formulário."
        };
      default:
        return {
          typeMessageFeedback: "bg-green-300/25 text-green-700",
          typeIcon: <Success />,
          messageFeedback:
            "Sucesso. Seus dados foram alterados conforme preenchimento do formulário."
        };
    }
  }
};

export const getTextFieldInfo = (typeMessage: MessageProps["typeMessage"]) => {
  switch (typeMessage) {
    case "warning":
      return {
        tagMessage: <TagMessage typeMessage="warning" />,
        colorMessage: "border-amber-400",
        disabled: true
      };
    case "error":
      return {
        tagMessage: <TagMessage typeMessage="error" />,
        colorMessage: "border-red-600",
        disabled: false
      };
    case "info":
      return {
        tagMessage: <TagMessage typeMessage="info" />,
        colorMessage: "border-blue-600",
        disabled: false
      };
    case "success":
      return {
        tagMessage: <TagMessage typeMessage="success" />,
        colorMessage: "border-green-600",
        disabled: false
      };
    default:
      return {
        tagMessage: null,
        colorMessage: "border-gray-400",
        disabled: false
      };
  }
};

export const getTextAreaInfo = (typeMessage: MessageProps["typeMessage"]) => {
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

export const getTooltipInfo = (typeMessage: MessageProps["typeMessage"]) => {
  let messageProperties = {
    typeMessageFeedback: "",
    title: "",
    subtitle: ""
  };

  switch (typeMessage) {
    case "warning":
      messageProperties = {
        typeMessageFeedback: "bg-amber-400 text-black",
        title: "Título amarelo",
        subtitle: "Subtítulo amarelo"
      };
      break;
    case "error":
      messageProperties = {
        typeMessageFeedback: "bg-red-600 text-white",
        title: "Título vermelho",
        subtitle: "Subtítulo vermelho"
      };
      break;
    case "info":
      messageProperties = {
        typeMessageFeedback: "bg-[#1351B4] text-white",
        title: "Título azul",
        subtitle: "Subtítulo azul"
      };
      break;
    default:
      messageProperties = {
        typeMessageFeedback: "bg-green-600 text-white",
        title: "Título verde",
        subtitle: "Subtítulo verde"
      };
      break;
  }

  return messageProperties;
};

type MessagePropertiesProps = {
  typeMessageFeedback: string;
  tagMessage?: React.ReactNode;
};

export const getUploadInfo = (typeMessage: MessageProps["typeMessage"]) => {
  let messageProperties: MessagePropertiesProps = {
    typeMessageFeedback: "",
    tagMessage: ""
  };

  switch (typeMessage) {
    case "warning":
      messageProperties = {
        typeMessageFeedback: "border-amber-500",
        tagMessage: <TagMessage typeMessage="warning" />
      };
      break;
    case "error":
      messageProperties = {
        typeMessageFeedback: "border-red-600",
        tagMessage: <TagMessage typeMessage="error" />
      };
      break;
    case "info":
      messageProperties = {
        typeMessageFeedback: "border-[#1351B4]",
        tagMessage: <TagMessage typeMessage="info" />
      };
      break;
    case "success":
      messageProperties = {
        typeMessageFeedback: "border-green-600",
        tagMessage: <TagMessage typeMessage="success" />
      };
      break;
    default:
      messageProperties = {
        typeMessageFeedback: "border-[#1351B4]"
      };
      break;
  }

  return messageProperties;
};
