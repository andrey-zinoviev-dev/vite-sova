// import GenericList from "./GenericList"
import { CourseInterface, ModuleInterface } from "./store/features/courseSlice";
// import TableButton from "./TableButton"
// import { useNavigate } from "react-router"
import "./TableComp.css"

interface TableCompInterface<T> {
  items: T[],
  renderItem: (item: T, index: number) => React.ReactNode,
}

export default function TableComp<T extends CourseInterface | ModuleInterface>({ items, renderItem }: TableCompInterface<T>){

  return (
    <ul className="table-ul">
      {items.map((item, index) => {
        return <li key={item._id}>
          {renderItem(item, index)}
        </li>
      })}
  </ul>
  )
}