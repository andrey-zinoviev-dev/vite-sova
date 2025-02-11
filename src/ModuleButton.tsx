import { ModuleExtInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
interface ModuleButtonInterface {
  module: ModuleExtInterface
}

export default function ModuleButton({ module }: ModuleButtonInterface) {
  return (
    <>
      <div className="button-row__title-wrapper">
        <span>{module.title}</span>
        {/* <span>{module.lessons.length} </span> */}
      </div>
      <div className="button-row__svg-wrapper">
        <span>уроки: {module.lessons.length}</span>
        {/* <FontAwesomeIcon icon={faCheck} /> */}
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  )
}