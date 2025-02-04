import GenericList from "./GenericList"
import { CourseInterface, ModuleInterface } from "./store/features/courseSlice";
import TableButton from "./TableButton"
// import { useNavigate } from "react-router"
import "./TableComp.css"

interface TableCompInterface<T> {
  items: T[],
}

export default function TableComp<T extends CourseInterface | ModuleInterface>({ items }: TableCompInterface<T>){
  // const navigate = useNavigate();

  return (
    <GenericList className={"table-ul"} items={items} renderItem={(item) => {
            return <TableButton item={item} handleClick={() => {
            }} disabled={item.available}>
            </TableButton>
    }}></GenericList>
  )
}