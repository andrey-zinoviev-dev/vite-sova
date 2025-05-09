import { useParams, useNavigate } from "react-router";
import "./Course.css";
import {
  // useShowCoursesQuery,
  useShowCurrentCourseQuery,
} from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";

import TableComp from "./TableComp";
// import BackButton from "./BackButton";
import ModuleData from "./ModuleData";
import TableElement from "./TableElement";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faPen } from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import HeadlineWrapper from "./HeadlineWrapper";
import CardHeadline from "./CardHeadline";
// import BreadCrumbs from "./Breadcrumbs";
// import ActionButton from "./ActionButton";

export default function Course() {
  const { courseId } = useParams();

  const navigate = useNavigate();
  // const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
  //   selectFromResult: ({data}) => ({
  //     data: data?.find((course) => {
  //       return course._id === courseId;
  //     })
  //   })
  // });

  // console.log(data);

  const { data = {} as CourseInterface } =
    useShowCurrentCourseQuery({courseId: courseId});

  // console.log(data);

  //crumbs
  // const crumbs = [{ path: `../courses/${data._id}/modules`, label: data.title }, {path: '', label: 'Модули'}];

  // const navigate = useNavigate();

  // const crumbs = [{label: 'Ваши курсы', link: '/profile'}, {label: data.title, link: `/courses/${data._id}/modules`}];

  return (
    <section>
      {/* <BackButton text="Назад"></BackButton> */}
      {/* <BreadCrumbs items={crumbs}></BreadCrumbs> */}
      {/* <h3>{data.title}</h3> */}
      {/* <ActionButton>
        <span>Мероприятия</span>
      </ActionButton> */}
      {/* <h2>Модули курса</h2> */}
      {data.modules && (
        <>
          <HeadlineWrapper>
            <ActionButton onClick={() => {
              navigate(`/profile`);
            }}>
              <FontAwesomeIcon icon={faArrowLeft} />
              Назад
            </ActionButton>
            <h2>{data.title}</h2>
          </HeadlineWrapper>
          <TableComp
            items={data.modules}
          renderItem={(item) => {
            return (
              <TableElement>
                <EditWrapper>
                  {/* <h3>{item.title}</h3> */}
                  <CardHeadline title={item.title}></CardHeadline>
                  <ActionButton className="button-action_svg">
                    <FontAwesomeIcon icon={faPen} />
                  </ActionButton>
                </EditWrapper>
                <p>{item.description}</p>

                <span>Пройдено 0 из {item.lessons.length} уроков</span>
                <ActionButton
                  disabled={!item.available}
                  onClick={() => {
                    navigate(`./${item._id}`);
                  }}
                >
                  Открыть
                </ActionButton>
                {/* <ModuleData courseTitle={data.title} item={item}></ModuleData> */}
              </TableElement>
            );
            }}
          ></TableComp>
        </>
      )}
    </section>
  );
}
