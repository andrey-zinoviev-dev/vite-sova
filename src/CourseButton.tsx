import { CourseInterface } from "./store/features/courseSlice";
import "./CourseButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
type CourseButton = Pick<CourseInterface, "author" | "title" | "available" | "description" | "_id">
// import testPic from "./assets/картинка_на_черном_фоне,_мятного_цвета_языки_пламени_и_на_фоне_них.jpg"
export default function CourseButton({title, author, available, description, _id}: CourseButton) {
  //navigation
  const navigate = useNavigate();
  // console.log(_id);
  return (
    <button onClick={() => {
      navigate(`courses/${_id}`)
    }} className="course-button" disabled={available ? false : true}>
      <span className="course-button__category">Вокал</span>
      <div className="course-button__top-wrapper">
        <span className="course-button__title">{title}
          <FontAwesomeIcon className={available ? "course-button__svg course-button__svg-color" : ""} icon={available ? faArrowRight : faLock} />
        </span>
        <span className="course-button__author">{author.name}</span>
      </div>
      <p className="course-button__desc">{description}</p>
      <div className="course-button__progress-wrapper">
        <span>Пройдено</span>
        <div className="course-button__progress">
        <div className="course-button__progress-div">
          <div className="course-button__progress-div-inner" style={{width: "35%"}}></div>
        </div>
        <span>35%</span>
      </div>
      </div>

      {/* <img className="course-button__cover" src={testPic}></img> */}
      <div className="course-button__bot-wrapper">
        <span>Старт курса</span>
        <span>30.01.2025</span>
        {/* <span>7 модулей</span> */}
      </div>
    </button>
  )
}