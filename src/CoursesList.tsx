// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import "./CoursesList.css"
import { useAppSelector } from "./hooks";
// import TableButton from "./TableButton";
import { useNavigate } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import TableComp from "./TableComp";
// import { CourseInterface } from "./store/features/courseSlice";
import TableButton from "./TableButton";
export default function CoursesList() {
  const courses = useAppSelector((state) => {
    return state.courses.courses;
  });

  // const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="courses-list-wrapper">
      <h2>Доступные курсы</h2>

      <TableComp items={courses} renderItem={(item, index) => {
        return <TableButton item={item} handleClick={() => {
          navigate(`./courses/${item._id}`)
        }} disabled={item.available}></TableButton>
      }}></TableComp>
    </div>
    
  )
};