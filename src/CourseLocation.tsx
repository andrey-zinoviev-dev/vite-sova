import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice"
import "./CourseLocation.css"

interface CourseLocationInterface {
  course: CourseInterface
  module: ModuleExtInterface,
  lesson: {
    _id: string,
    title: string,
  } 
}

export default function CourseLocation({ course, module, lesson }: CourseLocationInterface) {
  return (
    <div className="location">
      <span className="location__module">{course.title}</span>
      <span>/</span>
      <span className="location__module">{module.title}</span>
      <span>/</span>
      <span className="location__lesson">{lesson.title}</span>
    </div>
  )
}