import { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";
import UploadFile from "../../utils/icons/UploadFile";
import { getUploadInfo } from "../../utils/methods/getComponentInfo";
import Label from "../Label";
import UploadedFiles from "../UploadedFiles";

type UploadProps = {
  onInputChange?: (file: File | null) => void;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const Upload = ({ onInputChange, disabled, typeMessage }: UploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  const { typeMessageFeedback, tagMessage } = getUploadInfo(typeMessage);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      if (selectedFile.type === "image/png") {
        setUploadedFiles((prevUploadedFiles) => [
          ...prevUploadedFiles,
          selectedFile
        ]);
        setInvalidFile(false);
      } else {
        setInvalidFile(true);
      }
    }

    !!onInputChange && onInputChange(selectedFile);
  };

  return (
    <div>
      <div
        className={`flex flex-col pb-5 ${
          disabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        <Label
          name="file"
          disabled={disabled || typeMessage === "warning"}
          label="Envio de arquivos"
        >
          <div
            className={`flex items-center border-dashed bg-white rounded px-6 py-4 border border-2 ${typeMessageFeedback} ${
              invalidFile && "border-red-600"
            } ${
              disabled ||
              (typeMessage === "warning" && "opacity-50 cursor-not-allowed")
            }`}
          >
            <div className="flex items-center w-full text-[#1351B4]">
              <div className="w-6 h-6">
                <UploadFile />
              </div>
              <span className="text-lg italic font-light pl-6">
                Selecione o(s) arquivo(s)
              </span>
            </div>
            <div>
              <input
                className="hidden"
                onChange={onChange}
                id="file"
                type="file"
                disabled={disabled || typeMessage === "warning"}
              />
            </div>
          </div>
        </Label>
      </div>
      {invalidFile ? (
        <div className="mb-5">
          <TagMessage typeMessage="error" />
        </div>
      ) : (
        <div className="mb-5">{tagMessage}</div>
      )}
      {!!uploadedFiles ? <UploadedFiles uploadedFiles={uploadedFiles} /> : null}
    </div>
  );
};

export default Upload;
