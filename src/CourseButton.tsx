import { CourseInterface } from "./store/features/courseSlice";
import "./CourseButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock, faStar } from "@fortawesome/free-solid-svg-icons";
type CourseButton = Pick<CourseInterface, "author" | "title" | "available">
import testPic from "./assets/картинка_на_черном_фоне,_мятного_цвета_языки_пламени_и_на_фоне_них.jpg"
export default function CourseButton({title, author, available}: CourseButton) {
  return (
    <button  className="course-button">
      <div className="course-button__top-wrapper">
        <span className="course-button__title">{title}
          <FontAwesomeIcon className={"course-button__svg course-button__svg-color"} icon={faArrowRight} />
        </span>
        <span className="course-button__author">{author.name}</span>
      </div>
      
      <img className="course-button__cover" src={testPic}></img>
      <div className="course-button__bot-wrapper">
        <span>30.01.2025</span>
        <span>7 модулей</span>
        {/* <span>4.5 <FontAwesomeIcon className="course-button__svg-color" icon={faStar}></FontAwesomeIcon></span>  */}
      </div>
      {/* <div>
        <div>
          <span className="course-button__author">{author.name}</span>
          <FontAwesomeIcon icon={faLock} />
        </div>
          <span>5 модулей</span>
          <span>7 уроков</span>
        </div> */}
    </button>
  )
}