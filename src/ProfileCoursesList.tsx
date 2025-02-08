import CourseButton from "./CourseButton";
import GenericList from "./GenericList";
import { CourseInterface } from "./store/features/courseSlice";

interface ProfileCoursesList {
    courses: CourseInterface[],
};

export default function ProfileCoursesList({ courses }: ProfileCoursesList) {
    return (
        <></>
        // <GenericList className="" items={courses} renderItem={(course) => {
        //     return <button>
        //         <span>{course.title}</span>
        //         <span>Студентов на курсе: {course.students.length}</span>
        //     </button>
        // }}></GenericList>
    )
};