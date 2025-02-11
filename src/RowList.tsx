// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./RowList.css"
import { ModuleExtInterface } from "./store/features/courseSlice"
interface RowListInterface<T> {
  items: T[],
  // handleClick: (item: T) => void,
  renderItem: (item: T, index: number) => React.ReactNode,
}

export default function RowList<T extends {title: string, _id: string} | ModuleExtInterface>({items, renderItem}: RowListInterface<T>) {
  return (
    <ul className="list-row">
      {items.map((item, index) => {
        return <li key={item._id}>
          {renderItem(item, index)}
        </li>
      })}
    </ul>
  )
}