import { useParams, useNavigate } from "react-router";
import { useShowCurrentModuleQuery } from "./store/features/apiSlice";
import { ModuleExtInterface } from "./intefaces/intefaces";

// import BreadCrumbs from "./Breadcrumbs";
// import TableElement from "./TableElement";
import TableComp from "./TableComp";
import ActionButton from "./ActionButton";
// import EditWrapper from "./EditWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
// import HeadlineWrapper from "./HeadlineWrapper";
// import CardHeadline from "./CardHeadline";
import CommonCard from "./CommonCard";
import { useAppSelector } from "./hooks";
import SectionHeadline from "./SectionHeadline";

export default function Module() {
  const { courseId, moduleId } = useParams();

  const { data = {} as ModuleExtInterface } = useShowCurrentModuleQuery({
    moduleId: moduleId,
  });

  const navigate = useNavigate();

  const isAdmin = useAppSelector((state) => {
    return state.user.roles.includes("admin");
  });

  return (
    <section>
      {data.lessons && (
        <>
          <SectionHeadline>
            <ActionButton
              onClick={() => {
                navigate(`/courses/${courseId}/modules`);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Назад
            </ActionButton>
            <h2>
              {data.course.title} - {data.title}
            </h2>
          </SectionHeadline>
          <TableComp
            items={data.lessons}
            renderItem={(item, index) => {
              return (
                <CommonCard
                  isAdmin={isAdmin}
                  title={item.title}
                  index={`${index + 1}`}
                  onClick={() => {
                    console.log("edit item", item);
                  }}
                >
                  <ActionButton
                    disabled={!item.available}
                    onClick={() => {
                      navigate(
                        `/courses/${courseId}/modules/${moduleId}/lessons/${item._id}`
                      );
                    }}
                  >
                    {item.available ? "Открыть" : "Недоступно"}
                    {!item.available && <FontAwesomeIcon icon={faLock} />}
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
