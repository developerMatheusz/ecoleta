import RightArrow from "../../utils/icons/RightArrow";

type UploadedFilesProps = {
  uploadedFiles: File[];
};

const UploadedFiles = ({ uploadedFiles }: UploadedFilesProps) => {
  return (
    <div>
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
    </div>
  );
};

export default UploadedFiles;
