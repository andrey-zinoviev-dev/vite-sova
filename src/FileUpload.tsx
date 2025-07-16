import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { FileExtInterface } from "./intefaces/intefaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableComp from "./TableComp";
import ProgressBar from "./ProgressBar";
import "./FileUpload.css";
import { Upload } from "@aws-sdk/lib-storage";
import { s3ClientInitiated } from "./utils/s3Client";
import { CourseFilesContext } from "./contexts/courseFilesContext";
import { useContext, useEffect } from "react";

interface FileUploadInterface {
  // files: FileExtInterface[];
  // setFiles: (files: FileExtInterface[]) => void;
  handleAfterUpload: () => void;
}

export default function FileUpload({ handleAfterUpload }: FileUploadInterface) {
  const { files, setFiles } = useContext(CourseFilesContext);
  // const { files } = useContext(CourseFilesContext);

  //functions
  function handleUploadFiles() {
    
      Promise.all(
        files.map((file) => {
          const upload = new Upload({
            client: s3ClientInitiated,
            params: {
              Bucket: import.meta.env.VITE_AWS_NAME,
              Key: file.file.name,
              Body: file.file,
              ContentType: file.file.type,
            },
            queueSize: 4,
            partSize: 10 * 1024 * 1024,
          });
          upload.on("httpUploadProgress", (progress) => {
            const progressPercentage = Math.round(
              ((progress.loaded || 0) / (progress.total || 0)) * 100
            );
            setFiles((prevValue) => {
              return prevValue.map((item) => {
                if (item._id === file._id) {
                  return {
                    ...item,
                    progress: progressPercentage,
                  };
                }
                return item;
              });
            });
          });
          return upload.done();
        })
      )
        .then(() => {
          handleAfterUpload();
        })
        .catch((error) => {
          console.error("Failed to update lesson:", error);
          // console.error("Failed to update lesson:", error);
        });
  }

  useEffect(() => {
    // console.log("files", files);
    handleUploadFiles();
  }, []);

  return (
    <TableComp
      row={true}
      items={files}
      renderItem={(file) => {
        return (
          <div className="file-upload-item">
            <div className="file-upload-item__name">
              <span>{file.file.name}</span>
              <ProgressBar progress={file.progress || 0} />
            </div>
            <div>
              {file.progress === 100 ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faSpinner} spin />
              )}
            </div>
          </div>
        );
      }}
    ></TableComp>
  );
}
