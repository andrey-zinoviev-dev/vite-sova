// interface TableButton<T> {
//   item: T,
//   // children: React.ReactNode | React.ReactNode[],
//   handleClick: (item: T) => void,
//   disabled?: boolean,
//   children: React.ReactNode
//   // ?: boolean,
// };

import { ComponentPropsWithoutRef } from "react";
import "./TableButton.css";

type TableButtonInterface = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
// import { CourseInterface, ModuleInterface, StudentCourseInterface } from "./intefaces/intefaces";

export default function TableButton({ children, ...props }: TableButtonInterface) {
  return (
    <button className="button-table" {...props}>
      {children}
    </button>
  )
}