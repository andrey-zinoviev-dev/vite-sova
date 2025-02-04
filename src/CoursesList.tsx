import CourseButton from "./CourseButton";
import GenericList from "./GenericList";
import "./CoursesList.css"
import { useAppSelector } from "./hooks";
import TableButton from "./TableButton";
import { useNavigate } from "react-router";

export default function CoursesList() {
  const courses = useAppSelector((state) => {
    return state.courses.courses;
  });

  const navigate = useNavigate();

  return (
    <>
      <h2>Доступные курсы</h2>
      <GenericList className={"main-crouses-ul"} items={courses} renderItem={(course) => {
        return <TableButton item={course} handleClick={() => {
          navigate(`./courses/${course._id}`)
        }} disabled={course.available}>
        </TableButton>
        // return <CourseButton _id={course._id} description={course.description} available={course.available} title={course.title} author={course.author}></CourseButton>
      }}></GenericList>
    </>
    
  )
};