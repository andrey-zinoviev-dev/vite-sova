// import { faMessage } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router";
import "./LessonContent.css"
// import CourseLocation from "./CourseLocation";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface, LessonInterface, ModuleExtInterface } from "./intefaces/intefaces";
import { useParams, useNavigate } from "react-router";
import ActionButton from "./ActionButton";

export default function LessonContent() {
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
      }) as LessonInterface;

    return (
        <section className="lesson">
            {/* <h3>Контент урока</h3> */}
            {/* {data && module && lesson && <CourseLocation course={data} module={module} lesson={lesson}></CourseLocation>} */}
            <h2>{lesson && lesson.title}</h2>
            <div className="lesson__content">
                <h4>Обратите внимание на произношение сложных, парных согласных и продолжайте работать над песнями, исходя из этого. Песни на ваш выбор тоже можно, если нет проблем по работе с диапазоном.</h4>
                <img src="https://cdn.mohen-tohen.ru/IMG_20241127_232821_046.jpg"></img>
                <p>Вот тут еще текст</p>
                <img src="https://cdn.mohen-tohen.ru/56fa6f6622512890e8bc08085f65ad92.jpg"></img>
            </div>
            <div>
            <button>
                Предыдущий урок урок
            </button>
            <button>
                Следующий урок
            </button>
            <ActionButton>
                Выполнить задание
            </ActionButton>
            {/* <button className="lesson__chat-button" onClick={() => {
                navigate("./chat")
            }}>
                выполнить задание
            </button> */}
            </div>
            {/* <button>
                Следующий урок
            </button> */}

        </section>
    )
}