// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import { CourseInterface } from "./store/features/courseSlice";
import TableComp from "./TableComp";

interface ProfileCoursesList {
    courses: CourseInterface[],
};

export default function ProfileCoursesList({ courses }: ProfileCoursesList) {
    // console.log(courses);
    return (
        <TableComp items={courses} renderItem={(item) => {
            return <button>
                {item.title}
            </button>
        }}></TableComp>
        // <GenericList className="" items={courses} renderItem={(course) => {
        //     return <button>
        //         <span>{course.title}</span>
        //         <span>Студентов на курсе: {course.students.length}</span>
        //     </button>
        // }}></GenericList>
    )
};