import { CourseInterface } from "./store/features/courseSlice";
import "./CourseButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
type CourseButton = Pick<CourseInterface, "author" | "title" | "available">
import testPic from "./assets/картинка_на_черном_фоне,_мятного_цвета_языки_пламени_и_на_фоне_них.jpg"
export default function CourseButton({title, author, available}: CourseButton) {
  return (
    <button  className="course-button" disabled={available ? false : true}>
      <div className="course-button__top-wrapper">
        <span className="course-button__title">{title}
          <FontAwesomeIcon className={available ? "course-button__svg course-button__svg-color" : ""} icon={available ? faArrowRight : faLock} />
        </span>
        <span className="course-button__author">{author.name}</span>
      </div>
      
      <img className="course-button__cover" src={testPic}></img>
      <div className="course-button__bot-wrapper">
        <span>30.01.2025</span>
        <span>7 модулей</span>
      </div>
    </button>
  )
}