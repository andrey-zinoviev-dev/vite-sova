import { LessonInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons"
import RowButton from "./RowButton"
import "./LessonButton.css"

interface LessonButtonInterface {
  item: LessonInterface,
  index: number,
  available: boolean,
  handleClick: () => void,
  // to?: string,
}

export default function LessonButton({ item, index, available, handleClick }: LessonButtonInterface) {
  //navigate
  // const navigate = useNavigate();

  return (
    <RowButton className="button-lesson button-row" onClick={handleClick} disabled={!available}>
      <div className="button-row__title-wrapper">
        <span className="button-row__index">0{index}.</span>
        <span>{item.title}</span>
      </div>
      <div className="button-row__svg-wrapper">
         {/* <FontAwesomeIcon icon={faCheck} /> */}
        <FontAwesomeIcon icon={available ?  faArrowRight : faLock} />
      </div>
    </RowButton>
  )
}