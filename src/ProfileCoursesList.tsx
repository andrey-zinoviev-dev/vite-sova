// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import { useNavigate } from "react-router";
import { CourseInterface } from "./store/features/courseSlice";
import TableButton from "./TableButton";
import TableComp from "./TableComp";

interface ProfileCoursesList {
    courses: CourseInterface[],
};

export default function ProfileCoursesList({ courses }: ProfileCoursesList) {
    //navigate
    const navigate = useNavigate();
    // console.log(courses);
    return (
    
            <TableComp items={courses} renderItem={(item) => {
                return <TableButton item={item} disabled={item.available} handleClick={() => {
                    navigate(`../courses/${item._id}`)
                }} />
            }}></TableComp>
   

        // <GenericList className="" items={courses} renderItem={(course) => {
        //     return <button>
        //         <span>{course.title}</span>
        //         <span>Студентов на курсе: {course.students.length}</span>
        //     </button>
        // }}></GenericList>
    )
};