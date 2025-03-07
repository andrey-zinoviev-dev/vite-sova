import { useShowCoursesQuery } from "./store/features/apiSlice";
import { Outlet, useParams } from "react-router";
import { CourseInterface, ModuleExtInterface } from "./intefaces/intefaces";
// import SideBar from "./SideBar";

import "./Lesson.css"
import CourseLocation from "./CourseLocation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faBook, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
// import { useState } from "react";
// import PopupRight from "./PopupRight.tsx";
// import { useAppDispatch, useAppSelector } from "./hooks.ts";
// import { toggleMenu } from "./store/features/sideMenuSlice.ts";

export default function Lesson() {
  //location
  // const location = useLocation();
  // console.log(location);

  //navigate
  // const navigate = useNavigate();

  const { courseId, moduleId, lessonId } = useParams();

  const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
    selectFromResult: ({data}) => ({
        data: data?.find((course) => {
          return course._id === courseId;
      })
    })
  });

  const module = data.modules && data.modules.find((module) => {
    return module._id === moduleId;
  }) as ModuleExtInterface;

  const lesson = module?.lessons.find((lesson) => {
    return lesson._id === lessonId;
  }); 

  return (
    <>
      <Header>
        <></>
        {data && module && lesson && <CourseLocation course={data} module={module} lesson={lesson}></CourseLocation>}

      </Header>

      <Outlet></Outlet>
    </>
    
  )
}