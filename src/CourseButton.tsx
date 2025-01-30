import { CourseInterface } from "./store/features/courseSlice";
import "./CourseButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
type CourseButton = Pick<CourseInterface, "author" | "title">

export default function CourseButton({title, author}: CourseButton) {
  return (
    <button className="course-button">
             <span className="course-button__title">{title}</span>

      <div>
        <div>
          <span className="course-button__author">{author.name}</span>
          <FontAwesomeIcon icon={faLock} />
        </div>
          <span>5 модулей</span>
          <span>7 уроков</span>
        </div>
    </button>
  )
}