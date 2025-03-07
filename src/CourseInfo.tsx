import { useParams } from "react-router"
import { CourseInterface } from "./intefaces/intefaces";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import tempCover from "./assets/996c373e268c2cf28739de1b8464c295 1.png"

import "./CourseInfo.css"
import Highlight from "./Highlight";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CourseInfo() {
    const { courseId } = useParams();

    const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
        selectFromResult: ({data}) => ({
          data: data?.find((course) => {
            return course._id === courseId;
          })
        })
    });

    const startDate = new Date(data.startDate).toLocaleDateString();

    return (
        <>
          <section className="course-info">
            <div className="course-info__text">
              <Highlight>
                <span>{data.title}</span>
                <div className="course-info__dot"></div>
                <span>с нуля</span>
              </Highlight>
              <h2>{data.title}</h2>
              <p>Научитесь экстремальному вокалу без вреда для здоровья и отрыву от привычного образа жизни. Весь курс- это практика</p>
              <p>{data.description}</p>
              <span>Ближайший старт курса: {startDate}</span>
              <ActionButton>
                <div className="course-info__action-btn-wrapper">
                  <span>      
                    Попробовать бесплатно
                  </span>
                  <FontAwesomeIcon style={{rotate: "-45deg"}} icon={faArrowRight} />
                </div>
              </ActionButton>
            </div>
            <img className="course-info__cover" src={tempCover}></img>
          </section>
        </>
    )
}