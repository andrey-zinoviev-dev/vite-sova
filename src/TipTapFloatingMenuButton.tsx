import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useContext, useRef } from "react";
// import { useCurrentEditor } from "@tiptap/react";
import { CourseFilesContext } from "./contexts/courseFilesContext";
import { FileExtInterface } from "./intefaces/intefaces";

interface TipTapFloatingMenuButtonInterface {
  icon: IconProp;
  fileType: string;
  handleChange: (file: FileExtInterface) => void;
}

export default function TipTapFloatingMenuButton({
  icon,
  fileType,
  handleChange,
}: TipTapFloatingMenuButtonInterface) {
  //ref
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  //accept map
  const acceptObj: {
    [index: string]: string;
  } = {
    video: ".mp4, .mov",
    audio: ".mp3, .ogg, .wav",
    image: ".jpeg, .jpg, .png",
  };

  //editor
  // const { editor } = useCurrentEditor();

  //context
  const { setFiles } = useContext(CourseFilesContext);
  // console.log(files);

  return (
    <>
      <ActionButton
        onClick={() => {
          inputFileRef.current?.click();
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </ActionButton>
      <input
        ref={inputFileRef}
        type="file"
        onChange={(evt) => {
          const fileId = crypto.randomUUID();
          const file = evt.target.files && {
            file: evt.target.files[0],
            fileId: fileId,
          };
          if (file) {
            handleChange(file);
            setFiles((prevFiles) => [...prevFiles, file]);
          }
        }}
        style={{ display: "none" }}
        accept={acceptObj[fileType]}
      ></input>
    </>
  );
}
