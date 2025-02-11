import { LessonInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

interface LessonButtonInterface {
  item: LessonInterface,
  index: number,
}

export default function LessonButton({ item, index }: LessonButtonInterface) {
  return (
    <>
      <div className="button-row__title-wrapper">
        <span className="button-row__index">0{index}.</span>
        <span>{item.title}</span>
      </div>
      <div className="button-row__svg-wrapper">
        {/* <FontAwesomeIcon icon={faCheck} /> */}
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  )
}