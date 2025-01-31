import CoursesList from "./CoursesList";
// import GenericList from "./GenericList";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";
import "./Courses.css";
// import { CoursesInterface } from "./store/features/coursesSlice";

export default function Courses() {
    const { data = [] as CourseInterface[]} = useShowCoursesQuery();
    // console.log(data);

    return (
        <section className="courses">
            <div>
                <h2>Доступные курсы</h2>
            </div>
            <CoursesList courses={data}></CoursesList>
        </section>
    )
}