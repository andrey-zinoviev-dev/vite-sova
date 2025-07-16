// import CourseButton from "./CourseButton";
// import GenericList from "./GenericList";
import "./CoursesList.css";
// import { useAppSelector } from "./hooks";
// import TableButton from "./TableButton";
// import { useNavigate } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import TableComp from "./TableComp";
// import { CourseInterface } from "./store/features/courseSlice";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";
import TableElement from "./TableElement";
// import MainPageCourseData from "./MainPageCourseData";
import ActionButton from "./ActionButton";
import Highlight from "./Highlight";
import { useNavigate } from "react-router";
import CardHeadline from "./CardHeadline";
export default function CoursesList() {
  // const courses = useAppSelector((state) => {
  //   return state.courses.courses;
  // });

  // const location = useLocation();

  const { data = [] as CourseInterface[] } = useShowCoursesQuery();

  const navigate = useNavigate();

  return (
    <section>
      <h2>Доступные курсы</h2>
      <TableComp
        items={data}
        renderItem={(item) => {
          return (
            <li key={item._id}>
              <TableElement>
                <Highlight>
                  <span>Старт курса: {item.startDate}</span>
                </Highlight>
                <CardHeadline title={item.title}></CardHeadline>

                {/* <div className="button-table__top-wrapper">
              <span className="button-table__title">{item.title}</span>
              <span className="button-table__author">{item.author.name}</span>
            </div> */}

                <p className="button-table__desc">{item.description}</p>

                <ActionButton
                  onClick={() => {
                    navigate(`./courses/${item._id}`);
                  }}
                >
                  Изучить
                </ActionButton>
                {/* <MainPageCourseData item={item}></MainPageCourseData> */}
              </TableElement>
            </li>
          );
        }}
      />
    </section>
  );
}
