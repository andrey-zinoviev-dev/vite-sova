import { useParams, useLocation, Link, useNavigate } from "react-router";
import { useShowCurrentModuleQuery } from "./store/features/apiSlice";
import { ModuleExtInterface } from "./intefaces/intefaces";

// import BreadCrumbs from "./Breadcrumbs";
import TableElement from "./TableElement";
import TableComp from "./TableComp";
import ActionButton from "./ActionButton";
import EditWrapper from "./EditWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLock,
  faPencil,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HeadlineWrapper from "./HeadlineWrapper";
import CardHeadline from "./CardHeadline";
export default function Module() {
  const { courseId, moduleId } = useParams();
  const location = useLocation();
  const courseTitle = location.state?.courseTitle;

  const { data = {} as ModuleExtInterface } = useShowCurrentModuleQuery({
    moduleId: moduleId,
  });

  const navigate = useNavigate();

  // const crumbs = data._id
  //   ? [
  //       { label: data.course.title, path: `/courses/${courseId}/modules` },
  //       {label: "Модули", path: ''},
  //       { label: data.title, path: `/courses/${courseId}/modules/${data._id}` },
  //     ]
  //   : [];

  return (
    <section>
      {/* <BreadCrumbs items={crumbs}></BreadCrumbs> */}
      {data.lessons && (
        <>
          <HeadlineWrapper>
            <ActionButton onClick={() => {  
              navigate(`/courses/${courseId}/modules`);
            }}>
              <FontAwesomeIcon icon={faArrowLeft} />
              Назад
            </ActionButton>
            <h2>{data.course.title} - {data.title}</h2>
          </HeadlineWrapper>
          <TableComp
            items={data.lessons}
            renderItem={(item, index) => {
              return (
                <TableElement>
                  <EditWrapper>
                    <CardHeadline title={`${(index + 1).toString().padStart(2, '0')}. ${item.title}`}></CardHeadline>

                    <ActionButton className="button-action_svg">
                      <FontAwesomeIcon icon={faPencil} />
                    </ActionButton>
                  </EditWrapper>
                  
                    <ActionButton disabled={!item.available} onClick={() => {
                      navigate(`./lessons/${item._id}`, {
                        state: {
                          courseTitle: courseTitle,
                          moduleTitle: data.title,
                        }
                      });
                    }}>
                      {item.available ? "Открыть" : "Недоступно"}
                    </ActionButton>
                  
                </TableElement>
              );
            }}
          ></TableComp>
        </>
      )}
    </section>
  );
}
