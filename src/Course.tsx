import { useParams, useNavigate } from "react-router";
import "./Course.css";
import {
  // useShowCoursesQuery,
  useShowCurrentCourseQuery,
} from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";

import TableComp from "./TableComp";
// import BackButton from "./BackButton";
// import ModuleData from "./ModuleData";
// import TableElement from "./TableElement";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
// import EditWrapper from "./EditWrapper";
// import HeadlineWrapper from "./HeadlineWrapper";
// import CardHeadline from "./CardHeadline";
// import BreadCrumbs from "./Breadcrumbs";
// import ActionButton from "./ActionButton";
// import EditButton from "./EditButton";
// import ModuleCard from "./ModuleCard";
import CommonCard from "./CommonCard";
import { useAppSelector } from "./hooks";
// import EditElementWrapper from "./EditElementWrapper";
import SectionHeadline from "./SectionHeadline";
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

  const isAdmin = useAppSelector((state) => {
    return state.user.roles.includes("admin");
  });

  const { data = {} as CourseInterface } =
    useShowCurrentCourseQuery({courseId: courseId});

  // console.log(data);

  //crumbs
  // const crumbs = [{ path: `../courses/${data._id}/modules`, label: data.title }, {path: '', label: 'Модули'}];

  // const navigate = useNavigate();

  // const crumbs = [{label: 'Ваши курсы', link: '/profile'}, {label: data.title, link: `/courses/${data._id}/modules`}];

  return (
    <section>
      {data.modules && (
        <>
          <SectionHeadline>
            <ActionButton
              onClick={() => {
                navigate(`/profile`);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Назад
            </ActionButton>
            <h2>{data.title}</h2>
          </SectionHeadline>
          <TableComp
            items={data.modules}
            renderItem={(item, index) => {
              return (
                <CommonCard
                  isAdmin={isAdmin}
                  index={`${index + 1}`}
                  title={item.title}
                  onClick={() => {
                    console.log('edit item', item);
                    // navigate(`/courses/${data._id}/modules/${item._id}`);
                  }}
                >
                  <p>{item.description}</p>
                  <span>Пройдено 0 из {item.lessons.length} уроков</span>
                  <ActionButton
                    disabled={!item.available}
                    onClick={() => {
                      navigate(`/courses/${data._id}/modules/${item._id}`);
                    }}
                  >
                    <span>{item.available ? "Открыть" : `Недоступно `}</span>
                    {!item.available ? <FontAwesomeIcon icon={faLock} /> : null}
                  </ActionButton>
                </CommonCard>
              );
            }}
          ></TableComp>
        </>
      )}
    </section>
  );
}
