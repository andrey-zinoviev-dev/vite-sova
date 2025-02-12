import { ModuleExtInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretRight, faLock } from "@fortawesome/free-solid-svg-icons"
import RowButton from "./RowButton"
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
interface ModuleButtonInterface {
  module: ModuleExtInterface,
  opened: boolean,
  handleClick: () => void,
}

export default function ModuleButton({ module, opened, handleClick }: ModuleButtonInterface) {
  return (
    <RowButton  onClick={handleClick}>
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