import { Link } from "react-router";
import "./Sidebar.css";
import { ModuleExtInterface } from "./intefaces/intefaces";
import RowList from "./RowList";
import NavigationModule from "./NavigationModule";
// import LessonButton from "./LessonButton";

import { useParams } from "react-router";
// import { useShowCoursesQuery } from "./store/features/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faLock } from "@fortawesome/free-solid-svg-icons";
import PopupRight from "./PopupRight";

// import NavigationLink from "./NavigationLink";

interface SideBarInterface {
  // course: CourseInterface,
  // module: ModuleExtInterface,
  // closeSide: () => void,
  courseTitle: string;
  modules: ModuleExtInterface[];
}

export default function SideBar({ courseTitle, modules }: SideBarInterface) {
  //state
  const [openedSideBar, setOpenedSideBar] = useState<boolean>(false);

  const { lessonId, moduleId, courseId } = useParams();

  //functions
  function openSideBar() {
    setOpenedSideBar(true);
  }
  function closeAndNavigate() {
    setOpenedSideBar(false);
  }

  return (
    <>
      <button onClick={openSideBar}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      {openedSideBar && (
        <PopupRight closePopup={closeAndNavigate}>
          <div className="sidebar">
            <h3>{courseTitle}</h3>
            <span>Модули</span>
            <RowList
              items={modules}
              renderItem={(module) => {
                return (
                  <NavigationModule module={module}>
                    <RowList
                      items={module.lessons}
                      renderItem={(lesson) => {
                        return (
                          <>
                            <Link
                              className={`navigation-lesson-button ${
                                !lesson.available
                                  ? "navigation-lesson-button_disabled"
                                  : ""
                              } ${
                                lessonId === lesson._id
                                  ? "navigation-lesson-button_active"
                                  : ""
                              }`}
                              onClick={closeAndNavigate}
                              to={`/courses/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                              reloadDocument
                            >
                              <span className="navigation-lesson-button__title">
                                {lesson.title}
                              </span>
                              {!lesson.available && (
                                <FontAwesomeIcon
                                  icon={faLock}
                                ></FontAwesomeIcon>
                              )}
                            </Link>
                          </>
                        );
                      }}
                    ></RowList>
                  </NavigationModule>
                );
              }}
            ></RowList>
          </div>
        </PopupRight>
      )}
    </>
    // <span>SideBar</span>
  );
}
