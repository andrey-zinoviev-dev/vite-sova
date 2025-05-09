// import GenericList from "./GenericList"
import { CourseInterface, LessonInterface, ModuleInterface, StudentCourseInterface, TarifInterface } from "./intefaces/intefaces";
// import TableButton from "./TableButton"
// import { useNavigate } from "react-router"
import "./TableComp.css"

interface TableCompInterface<T> {
  items: T[],
  renderItem: (item: T, index: number) => React.ReactNode,
  children?: React.ReactNode
}

export default function TableComp<T extends CourseInterface | ModuleInterface | StudentCourseInterface | TarifInterface | LessonInterface>({ items, renderItem, children }: TableCompInterface<T>){

  return (
    <ul className="table-ul">
      {children}
      {items.map((item, index) => {
        return <li key={item._id}>
          {renderItem(item, index)}
        </li>
      })}
  </ul>
  )
}