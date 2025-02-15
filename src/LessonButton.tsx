import { LessonInterface } from "./store/features/courseSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons"
import RowButton from "./RowButton"
import "./LessonButton.css"
import { useParams } from "react-router"

interface LessonButtonInterface {
  item: LessonInterface | {
    title: string,
    _id: string,
  },
  index: number,
  available: boolean,
  handleClick: () => void,
  // active?: boolean
  // to?: string,
}

export default function LessonButton({ item, index, available, handleClick }: LessonButtonInterface) {
  //navigate
  // const navigate = useNavigate();

  const { lessonId } = useParams();

  const classStr = lessonId === item._id ? `button-lesson_active button-lesson` : "button-lesson";
  // console.log(classStr);

  return (
    <RowButton className={classStr} onClick={handleClick} disabled={!available}>
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