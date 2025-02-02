import CourseButton from "./CourseButton";
import GenericList from "./GenericList";
import { CourseInterface } from "./store/features/courseSlice";
import "./CoursesList.css"
interface CoursesListInterface {
  courses: CourseInterface[],
}

export default function CoursesList({courses}: CoursesListInterface) {
  // console.log(courses);
  return (
    <GenericList className={"main-crouses-ul"} items={courses} renderItem={(course) => {
      return <CourseButton _id={course._id} description={course.description} available={course.available} title={course.title} author={course.author}></CourseButton>
    }}></GenericList>
  )
};