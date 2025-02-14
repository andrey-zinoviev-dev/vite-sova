import { ModuleExtInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretRight, faLock } from "@fortawesome/free-solid-svg-icons"
import RowButton from "./RowButton"
import { useParams } from "react-router"
import "./ModuleButton.css"
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
interface ModuleButtonInterface {
  module: ModuleExtInterface,
  opened: boolean,
  handleClick: () => void,
  available: boolean,
}

export default function ModuleButton({ module, opened, handleClick, available }: ModuleButtonInterface) {
  const { moduleId } = useParams();

  const classStr = moduleId === module._id ? `module-button_active module-button button-row` : `module-button button-row`

  return (
    <RowButton disabled={!available} className={classStr} onClick={handleClick}>
      <div className="button-row__title-wrapper">
        <span>{module.title}</span>
        {/* <span>{module.lessons.length} </span> */}
      </div>
      <div className="button-row__svg-wrapper">
        <span>уроки: {module.lessons.length}</span>
         {/* <FontAwesomeIcon icon={faCheck} /> */}
        {module.available ? <FontAwesomeIcon icon={opened ? faCaretDown : faCaretRight} /> : <FontAwesomeIcon icon={faLock} />}
      </div>
    </RowButton>
  )
}