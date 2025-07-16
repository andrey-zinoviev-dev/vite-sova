import { Dispatch } from "react";
import { SetStateAction } from "react";
import { CourseFilesContext } from "./contexts/courseFilesContext";
import { FileExtInterface } from "./intefaces/intefaces";
import TipTap from "./Tiptap";
import { JSONContent } from "@tiptap/react";
import "./EditTiptap.css";

interface EditTiptapInterface {
  files: FileExtInterface[];
  setFiles: Dispatch<SetStateAction<FileExtInterface[]>>;
  updateContent: (content: JSONContent) => void;
  content?: JSONContent;
}

export default function EditTiptap({ files, setFiles, updateContent, content }: EditTiptapInterface) {
  return (
    <div className="edit-tiptap">
      <span>Контент урока</span>
      <CourseFilesContext.Provider
        value={{
          files: files,
          setFiles: setFiles,
        }}
      >
        <TipTap
          isEditable={true}
          updateContent={(content) => {
            updateContent(content);
          }}
          content={content ? content : {content: [], type: "doc"} as JSONContent}
        />
      </CourseFilesContext.Provider>
    </div>
  );
}