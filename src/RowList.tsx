import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericList from "./GenericList";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import RowButton from "./RowButton";
import "./RowList.css"
interface RowListInterface<T> {
  items: T[],
}

export default function RowList<T extends {title: string}>({items}: RowListInterface<T>) {
  return (
    <GenericList className="list-row" items={items} renderItem={(item, index) => {
      return <RowButton index={index} item={item}></RowButton>
    }}></GenericList>
  )
}