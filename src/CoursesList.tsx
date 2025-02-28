// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import "./CoursesList.css"
// import { useAppSelector } from "./hooks";
// import TableButton from "./TableButton";
import { useNavigate } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import TableComp from "./TableComp";
// import { CourseInterface } from "./store/features/courseSlice";
import TableButton from "./TableButton";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";
import TableElement from "./TableElement";
import MainPageCourseData from "./MainPageCourseData";
export default function CoursesList() {
  // const courses = useAppSelector((state) => {
  //   return state.courses.courses;
  // });

  // const location = useLocation();

  const {data = [] as CourseInterface[]} = useShowCoursesQuery()

  const navigate = useNavigate();

  return (
    <div className="courses-list-wrapper">
      <h2>Доступные курсы</h2>

      <TableComp items={data} renderItem={(item, index) => {
        // return <TableElement>
        //   {/* <TableButton item={item} handleClick={() => {
        //     navigate(`./courses/${item._id}`)
        //   }}></TableButton> */}
        // </TableElement>
        return <TableButton onClick={() => {
          navigate(`./courses/${item._id}/modules`)
        }}>
          <MainPageCourseData item={item} />
        </TableButton>
      }}></TableComp>
    </div>
    
  )
};