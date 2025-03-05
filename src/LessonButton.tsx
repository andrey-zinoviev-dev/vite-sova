import { LessonInterface } from "./intefaces/intefaces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faGear, faLock } from "@fortawesome/free-solid-svg-icons"
import RowButton from "./RowButton"
import "./LessonButton.css"
import { useParams } from "react-router"
import ActionButton from "./ActionButton"

interface LessonButtonInterface {
  item: LessonInterface | {
    title: string,
    _id: string,
  },
  index: number,
  available: boolean,
  handleClick: () => void,
  edit?: boolean
  // active?: boolean
  // to?: string,
}

export default function LessonButton({ item, index, available, handleClick, edit }: LessonButtonInterface) {
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
        {edit && <ActionButton>
          <FontAwesomeIcon icon={faGear} />  
        </ActionButton>}
      </div>
    </RowButton>
  )
}