import { useAppSelector } from "./hooks"
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";
import { CoursesInterface } from "./store/features/coursesSlice";

export default function Courses() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    const { data = [] as CourseInterface[]} = useShowCoursesQuery();

    return (
        <section>
            <div>
                <h3>С возвращением, {user.name}</h3>
                <span>Что хотите изучить сегодня?</span>
            </div>

            <ul>
                {data.map((course) => {
                    return <li key={course._id}>
                        <button>{course.title}</button>
                    </li>
                })}
            </ul>
            
        </section>
    )
}