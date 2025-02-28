import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ModuleExtInterface } from "./intefaces/intefaces"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"

interface ModuleDataInterface {
  item: ModuleExtInterface,
}

export default function ModuleData({ item }: ModuleDataInterface) {
  return (
    <>
      <div>
        <h4>{item.title}</h4>
        <Link onClick={(evt) => {
          evt.stopPropagation();
        }} to={`./edit/${item._id}}`}>
          <FontAwesomeIcon icon={faGears} />
        </Link>
      </div>
      <div>
        <p>Модуль про стабильное и уверенное расщепление на 3 смыканиях за 8 недель</p>
      </div>
    </>
  )
}