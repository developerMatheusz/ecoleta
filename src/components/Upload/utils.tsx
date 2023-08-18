import TagMessage from "../TagMessage";

type UploadProperties = {
  tagMessage?: React.ReactNode;
};

export const getUploadProperties = (typeMessage: string) => {
  const propertiesMapping: Record<string, UploadProperties> = {
    warning: {
      tagMessage: <TagMessage typeMessage="warning" />
    },
    error: {
      tagMessage: <TagMessage typeMessage="error" />
    },
    info: {
      tagMessage: <TagMessage typeMessage="info" />
    },
    success: {
      tagMessage: <TagMessage typeMessage="success" />
    },
    default: {
      tagMessage: null
    }
  };

  return propertiesMapping[typeMessage] || propertiesMapping.default;
};
