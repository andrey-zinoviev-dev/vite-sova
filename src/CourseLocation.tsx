import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice"
import "./CourseLocation.css"
import { useNavigate, useParams } from "react-router"

interface CourseLocationInterface {
  course: CourseInterface
  module: ModuleExtInterface,
  lesson: {
    _id: string,
    title: string,
  } 
}

export default function CourseLocation({ course, module, lesson }: CourseLocationInterface) {
  const {courseId, moduleId} = useParams();

  const navigate = useNavigate();

  return (
    <div className="location">
      <button onClick={() => {
        navigate(`../courses/${courseId}`)
      }} className="location__module">{course.title}</button>
      <span>/</span>
      <button onClick={() => {
        navigate(`../courses/${courseId}/modules/${moduleId}`)
      }} className="location__module">{module.title}</button>
      <span>/</span>
      <span className="location__lesson">{lesson.title}</span>
    </div>
  )
}