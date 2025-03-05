import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ModuleExtInterface } from "./intefaces/intefaces"
import { faGear } from "@fortawesome/free-solid-svg-icons"
// import { Link } from "react-router"
import ActionButton from "./ActionButton"
import EditWrapper from "./EditWrapper"
import { useNavigate } from "react-router"

interface ModuleDataInterface {
  item: ModuleExtInterface,
}

export default function ModuleData({ item }: ModuleDataInterface) {
  const navigate = useNavigate();

  return (
    <>
      {/* <div>
        <h4>{item.title}</h4>
        <Link onClick={(evt) => {
          evt.stopPropagation();
        }} to={`./edit/${item._id}}`}>
          <FontAwesomeIcon icon={faGears} />
        </Link>
      </div> */}
      <EditWrapper>
        <h3>{item.title}</h3>
        <ActionButton>
          <FontAwesomeIcon icon={faGear} />
        </ActionButton>
      </EditWrapper>
      <div>
        <p>Модуль про стабильное и уверенное расщепление на 3 смыканиях за 8 недель</p>
      </div>
      <span>Пройдено 0 из {item.lessons.length} уроков</span>
      <ActionButton onClick={() => {
        navigate(`./${item._id}`)
      }}>
        Открыть
      </ActionButton>
    </>
  )
}