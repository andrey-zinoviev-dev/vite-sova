// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ExtFileType } from "./ChatForm"
import "./RowList.css"
import { ModuleExtInterface } from "./intefaces/intefaces"
import { UserInterface } from "./store/features/userSlice"
interface RowListInterface<T> {
  items: T[],
  // handleClick: (item: T) => void,
  renderItem: (item: T, index: number) => React.ReactNode,
  children?: React.ReactNode,
}

export default function RowList<T extends {title: string, _id: string} | ModuleExtInterface | UserInterface | ExtFileType>({items, renderItem, children}: RowListInterface<T>) {
  return (
    <ul className="list-row">
      {children}
      {items.map((item, index) => {
        return <li key={item._id}>
          {renderItem(item, index)}
        </li>
      })}
    </ul>
  )
}