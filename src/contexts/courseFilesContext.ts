import { createContext } from "react";

export const CourseFilesContext = createContext<{ files: File[], updateFunction: (file: File) => void} >({files: [], updateFunction: () => {}});