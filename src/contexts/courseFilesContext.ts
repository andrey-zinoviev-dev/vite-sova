import { createContext } from "react";
import { FileExtInterface } from "../intefaces/intefaces";

interface CourseFilesContextInterface {
  files: FileExtInterface[];
  setFiles: React.Dispatch<React.SetStateAction<FileExtInterface[]>>;
}

// Default setter function
const defaultSetFiles = () => {
  console.warn("CourseFilesContext: setFiles called without provider");
};

export const CourseFilesContext = createContext<CourseFilesContextInterface>({
  files: [],
  setFiles: defaultSetFiles,
});
