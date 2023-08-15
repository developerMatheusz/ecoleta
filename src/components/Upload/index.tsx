import { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";
import UploadFile from "../../utils/icon/UploadFile";
import RightArrow from "../../utils/icon/RightArrow";

type UploadProps = {
  onInputChange?: (file: File | null) => void;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const Upload = ({ onInputChange, disabled, typeMessage }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  let typeMessageFeedback = "";
  let tagMessage = null;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      if (selectedFile.type === "image/png") {
        setFile(selectedFile);
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

  switch (typeMessage) {
    case "warning":
      typeMessageFeedback = "border-amber-500";
      tagMessage = <TagMessage typeMessage="warning" />;
      disabled = true;
      break;
    case "error":
      typeMessageFeedback = "border-red-600";
      tagMessage = <TagMessage typeMessage="error" />;
      break;
    case "info":
      typeMessageFeedback = "border-[#1351B4]";
      tagMessage = <TagMessage typeMessage="info" />;
      break;
    case "success":
      typeMessageFeedback = "border-green-600";
      tagMessage = <TagMessage typeMessage="success" />;
      break;
    default:
      typeMessageFeedback = "border-[#1351B4]";
      break;
  }

  return (
    <div>
      <div className={`pb-5 ${disabled && "opacity-50 cursor-not-allowed"}`}>
        <label
          className={`block cursor-pointer ${
            disabled && "opacity-50 cursor-not-allowed"
          }`}
          htmlFor="file"
        >
          <span
            className={`text-lg ${disabled && "opacity-50 cursor-not-allowed"}`}
          >
            Envio de arquivos
          </span>
          <div
            className={`flex items-center border-dashed bg-white rounded px-6 py-4 border border-2 ${typeMessageFeedback} ${
              invalidFile && "border-red-600"
            } ${disabled && "opacity-50 cursor-not-allowed"}`}
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
              />
            </div>
          </div>
        </label>
      </div>
      {invalidFile ? (
        <div className="mb-5">
          <TagMessage typeMessage="error" />
        </div>
      ) : (
        <div className="mb-5">{tagMessage}</div>
      )}
      {!!uploadedFiles ? (
        <>
          {uploadedFiles.map((uploadedFile, index) => (
            <div
              key={index}
              className="flex justify-between pl-4 py-6 pr-10 w-full text-lg font-light bg-white border shadow-md cursor-pointer"
            >
              <span className="text-[#1351B4]">{uploadedFile.name}</span>
              <div className="flex items-center">
                <div>
                  <span className="text-black mr-4">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
                <div className="w-3 h-3 ml-4 mb-2 text-[#1351B4]">
                  <RightArrow />
                </div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Upload;
