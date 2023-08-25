"use client";

import { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";
import UploadFile from "../../utils/icons/UploadFile";
import Label from "../Label";
import UploadedFiles from "../UploadedFiles";
import { getUploadProperties } from "./utils";
import * as S from "./styles";

export type UploadProps = {
  onInputChange?: (file: File | null) => void;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const Upload = ({ onInputChange, disabled, typeMessage }: UploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  const { tagMessage } = getUploadProperties(typeMessage!);

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
    <S.Container>
      <S.Head disabled={disabled}>
        <Label
          name="file"
          disabled={disabled || typeMessage === "warning"}
          label="Envio de arquivos"
        >
          <S.GroupItems
            typeMessage={typeMessage}
            invalidFile={invalidFile}
            disabled={disabled || typeMessage === "warning"}
          >
            <S.Section>
              <S.ContainerIcon>
                <UploadFile />
              </S.ContainerIcon>
              <S.Span>Selecione o(s) arquivo(s)</S.Span>
            </S.Section>
            <S.Input
              type="file"
              onChange={onChange}
              id="file"
              disabled={disabled || typeMessage === "warning"}
            />
          </S.GroupItems>
        </Label>
      </S.Head>
      {invalidFile ? (
        <S.ContainerTagMessage>
          <TagMessage typeMessage="error" />
        </S.ContainerTagMessage>
      ) : (
        <S.ContainerTagMessage>{tagMessage}</S.ContainerTagMessage>
      )}
      {uploadedFiles ? <UploadedFiles uploadedFiles={uploadedFiles} /> : null}
    </S.Container>
  );
};

export default Upload;
