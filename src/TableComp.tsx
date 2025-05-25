// import GenericList from "./GenericList"
import {
  CourseInterface,
  LessonInterface,
  ModuleInterface,
  StudentCourseInterface,
  TarifInterface,
  NewTarifType,
  EventInterface,
  StreamInterface,
  StreamLessonInterface,
} from "./intefaces/intefaces";
// import TableButton from "./TableButton"
// import { useNavigate } from "react-router"
import "./TableComp.css";

export interface TableCompInterface<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  children?: React.ReactNode;
}

export default function TableComp<
  T extends
    | CourseInterface
    | ModuleInterface
    | StudentCourseInterface
    | TarifInterface
    | NewTarifType
    | LessonInterface
    | EventInterface
    | StreamInterface
    | StreamLessonInterface
>({ items, renderItem, children }: TableCompInterface<T>) {
  return (
    <ul className="table-ul">
      {items.map((item, index) => {
        return <li key={item.title}>{renderItem(item, index)}</li>;
        // return <li key={item._id}>{renderItem(item, index)}</li>;
      })}
      {children}
    </ul>
  );
}
