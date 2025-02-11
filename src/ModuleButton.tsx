import { ModuleExtInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretRight, faCheck, faLock } from "@fortawesome/free-solid-svg-icons"
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
interface ModuleButtonInterface {
  module: ModuleExtInterface,
  opened: boolean,
}

export default function ModuleButton({ module, opened }: ModuleButtonInterface) {
  return (
    <>
      <div className="button-row__title-wrapper">
        <span>{module.title}</span>
        {/* <span>{module.lessons.length} </span> */}
      </div>
      <div className="button-row__svg-wrapper">
        <span>уроки: {module.lessons.length}</span>
        {/* <FontAwesomeIcon icon={faCheck} /> */}
        {module.available ? <FontAwesomeIcon icon={opened ? faCaretDown : faCaretRight} /> : <FontAwesomeIcon icon={faLock} />}
      </div>
    </>
  )
}