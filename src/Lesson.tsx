import { useShowCoursesQuery } from "./store/features/apiSlice";
import { Outlet, useParams } from "react-router";
import { CourseInterface } from "./store/features/courseSlice";
import SideBar from "./SideBar";

import "./Lesson.css"
import CourseLocation from "./CourseLocation";

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

  return (
    <section className="lesson">
      {/* {data.title && module && <SideBar course={data} module={module}></SideBar>} */}
      {data && module && lesson && <CourseLocation course={data} module={module} lesson={lesson}></CourseLocation>}
      <h2>{lesson?.title}</h2>
      <Outlet></Outlet>
      {/* {!chatOn ? <>
        <div className="lesson__content">
          <h4>Обратите внимание на произношение сложных, парных согласных и продолжайте работать над песнями, исходя из этого. Песни на ваш выбор тоже можно, если нет проблем по работе с диапазоном.</h4>
          <img src="https://cdn.mohen-tohen.ru/IMG_20241127_232821_046.jpg"></img>
          <p>Вот тут еще текст</p>
          <img src="https://cdn.mohen-tohen.ru/56fa6f6622512890e8bc08085f65ad92.jpg"></img>
        </div>
        <button>
          Следующий урок
        </button>
        <button onClick={() => {
          setChatOn(true);
        }} className="lesson__chat-button">
          <FontAwesomeIcon icon={faMessage} />
        </button>
      </>
      :
      <Chat />} */}
    </section>
  )
}