import { useShowCoursesQuery } from "./store/features/apiSlice";
import { Outlet, useParams } from "react-router";
import { CourseInterface } from "./store/features/courseSlice";
import SideBar from "./SideBar";

import "./Lesson.css"
import CourseLocation from "./CourseLocation";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LessonHeader from "./LessonHeader.tsx";
import Header from "./Header";
import { useState } from "react";
import Popup from "./Popup.tsx";

export default function Lesson() {
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
  });

  const lesson = module?.lessons.find((lesson) => {
    return lesson._id === lessonId;
  });

  //state
  const [sideOpened, setSideOpened] = useState<boolean>(false);

  return (
    <section className="lesson">
      <LessonHeader>
        {data && module && lesson && <CourseLocation course={data} module={module} lesson={lesson}></CourseLocation>}
        <button onClick={() => {
          setSideOpened(!sideOpened);
        }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </LessonHeader>
      <h2>{lesson?.title}</h2>
      <Outlet></Outlet>
      {sideOpened && <Popup>
        <h3>навигация по курсу</h3>  
      </Popup>}
    </section>
  )
}