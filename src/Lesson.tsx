import { useShowCoursesQuery } from "./store/features/apiSlice";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";
import SideBar from "./SideBar";

import "./Lesson.css"
import CourseLocation from "./CourseLocation";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import LessonHeader from "./LessonHeader.tsx";
import Header from "./Header";
import { useState } from "react";
import Popup from "./Popup.tsx";
import PopupRight from "./PopupRight.tsx";

export default function Lesson() {
  //location
  const location = useLocation();
  console.log(location);

  //navigate
  const navigate = useNavigate();

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

  //state
  const [sideOpened, setSideOpened] = useState<boolean>(false);

  return (
    <section className="lesson">
      <Header></Header>
      {/* <LessonHeader>
        {data && module && lesson && <CourseLocation course={data} module={module} lesson={lesson}></CourseLocation>}
        {location.pathname.includes("chat") 
        ? 
        <button onClick={() => {
          navigate(-1);
        }}>
          <FontAwesomeIcon icon={faBook} />
        </button> 
        : 
        <button onClick={() => {
          navigate("./chat")
        }}>
          <FontAwesomeIcon icon={faMessage} />
        </button>}
        <button onClick={() => {
          setSideOpened(!sideOpened);
        }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </LessonHeader> */}
      <h2>{lesson?.title}</h2>
      <Outlet></Outlet>
      {sideOpened && <PopupRight>
        <div className="popup__close-wrapper">
          <h3>{data.title}</h3>
          <button onClick={() => {
            setSideOpened(false);
                          // setOpenedSideBar(false);
          }}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <SideBar closeSide={() => {
          setSideOpened(false);
        }} course={data} module={module}></SideBar>

        </PopupRight>}
      {/* {sideOpened && <Popup className="popup_right">
        <h3>навигация по курсу</h3>
        {module && <SideBar course={data} module={module}></SideBar>}
      </Popup>} */}
    </section>
  )
}