import CoursesList from "./CoursesList";
// import GenericList from "./GenericList";
import { useAppSelector } from "./hooks"
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";
// import { CoursesInterface } from "./store/features/coursesSlice";

export default function Courses() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    const { data = [] as CourseInterface[]} = useShowCoursesQuery();
    console.log(data);

    return (
        <section className="courses">
            <div>
                <h1>{}</h1>
                <span>Что хотите изучить сегодня?</span>
            </div>
            <CoursesList courses={data}></CoursesList>
        </section>
    )
}