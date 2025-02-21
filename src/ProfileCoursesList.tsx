// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import { useNavigate } from "react-router";
// import { StudentCourseInterface } from "./store/features/courseSlice";
import TableButton from "./TableButton";
import TableComp from "./TableComp";
import { useAppSelector } from "./hooks";
// interface ProfileCoursesList {
//     courses: {
//         course: StudentCourseInterface,
//     }[]
// };

export default function ProfileCoursesList() {
    //navigate
    const navigate = useNavigate();
    
    const user = useAppSelector((state) => {
        return state.user;
    });

    const userCourses = user.courses.map((course) => {
        return course.course;
    });

    return (
    // <></>
            <TableComp items={userCourses} renderItem={(item) => {
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