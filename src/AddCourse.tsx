// import Wizard from "./Wizard";

// import AddCourseBase from "./AddCourseBase";
// import { useCallback, useEffect, useMemo, useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { 
// //   faArrowLeft,
// //     // faArrowLeft, 
// //     faChevronRight } from "@fortawesome/free-solid-svg-icons";
// // import { useNavigate } from "react-router";
// import AddCourseModules from "./AddCourseModules";
// import AddCourseLessons from "./AddCourseLessons";

// import { CourseFilesContext } from "./contexts/courseFilesContext";
// import { NewCourseType } from "./intefaces/intefaces";

import "./AddCourse.css"
// import ActionButton from "./ActionButton";
// import BreadCrumbs from "./Breadcrumbs";
// import { Link } from "react-router";
// import BackButton from "./BackButton";
// import ActionButton from "./ActionButton";
import AddFromContainer from "./AddFromContainer";

export default function AddCourse() {
    //state
    // const [files, setFiles] = useState<File[]>([]);

    //functions
    // const updateFunction = useCallback(function updateFiles(file: File) {
    //     return setFiles((prevValue) => {
    //         return [...prevValue, file];
    //     })
    // }, []);

    // const filesContext = useMemo(() => ({
    //     files,
    //     updateFunction,
    // }), [files])
    
    // function handleSubmitCourse(courseData: NewCourseType) {
    //     console.log(files);
    //     console.log(courseData);
    // }

    // const navigate = useNavigate();


    // useEffect(() => {
    //     const unloadCallback = (event: BeforeUnloadEvent) => {
    //       event.preventDefault();
    //       return "";
    //     };
      
    //     window.addEventListener("beforeunload", unloadCallback);
    //     return () => window.removeEventListener("beforeunload", unloadCallback);
    //   }, []);

    return (
      <section>
        <AddFromContainer />
      </section>
      // <section>
      //   <AddCourseBase headline="Информация о курсе"></AddCourseBase>
      //   <div className="breadcrumbs">
      //     <span>Профиль</span>
      //     <FontAwesomeIcon icon={faChevronRight} />
      //     <span>Добавление нового курса</span>
      //   </div>
      //   <BreadCrumbs></BreadCrumbs>
      //   <BackButton text="Назад в профиль"></BackButton>

      //   <CourseFilesContext.Provider value={filesContext}>
      //     <Wizard onSubmit={handleSubmitCourse}>
      //       <AddCourseBase headline="Информация о курсе"></AddCourseBase>
      //       <AddCourseModules headline="Модули курса"></AddCourseModules>
      //       <AddCourseLessons headline="Уроки в модулях"></AddCourseLessons>
      //     </Wizard>
      //   </CourseFilesContext.Provider>
      // </section>
    );
}