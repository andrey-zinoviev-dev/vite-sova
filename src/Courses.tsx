// import CoursesList from "./CoursesList";
// import GenericList from "./GenericList";

import "./Courses.css";
import { Outlet } from "react-router";
// import { useShowCoursesQuery } from "./store/features/apiSlice";
// import { CourseInterface } from "./store/features/courseSlice";
// import { useEffect } from "react";
// import { useAppDispatch } from "./hooks";
// import { setCourses } from "./store/features/coursesSlice";
// import { Container } from "./Container";
// import Header from "./Header";
// import { CoursesInterface } from "./store/features/coursesSlice";

export default function Courses() {
    // const { data = [] as CourseInterface[]} = useShowCoursesQuery();

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if(data.length > 0) {
    //         dispatch(setCourses(data));
    //     }
    // }, [data])

    return (
        <>
            {/* <Header></Header> */}
            <section className="courses">
                <Outlet></Outlet>
            </section>
        </>

    )
}