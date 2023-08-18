import RightArrow from "../../utils/icons/RightArrow";
import * as S from "./styles";

type UploadedFilesProps = {
  uploadedFiles: File[];
};

const UploadedFiles = ({ uploadedFiles }: UploadedFilesProps) => {
  return (
    <S.Container>
      {uploadedFiles.map((uploadedFile, index) => (
        <S.Section key={index}>
          <S.Span>{uploadedFile.name}</S.Span>
          <S.GroupInformation>
            <S.InfoSize>
              {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
            </S.InfoSize>
            <S.ContainerIcon>
              <RightArrow />
            </S.ContainerIcon>
          </S.GroupInformation>
        </S.Section>
      ))}
    </S.Container>
  );
};

export default UploadedFiles;
