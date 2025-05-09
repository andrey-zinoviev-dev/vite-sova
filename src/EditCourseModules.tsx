import TableComp from "./TableComp";
import TableElement from "./TableElement";
import { useShowCurrentCourseQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";
import { useParams } from "react-router";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import EditElementWrapper from "./EditElementWrapper";

export default function EditCourseModules () {
    const { courseId } = useParams();
    const { data = {} as CourseInterface } = useShowCurrentCourseQuery({ courseId: courseId});

    return (
      data._id && (
        <>
          <EditElementWrapper>
            <h3>Модули</h3>
            <p>Редактируйте, добавляйте и удаляйте модули курса</p>
          </EditElementWrapper>
          <TableComp
            items={data.modules}
            renderItem={(module) => {
              return (
                <TableElement>
                  <EditWrapper>
                    <h3>{module.title}</h3>
                    <button>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </EditWrapper>
                  <p>{module.description}</p>
                  {/* <ActionButton>Изменить модуль</ActionButton> */}
                </TableElement>
              );
            }}
          >
            <ActionButton className="button-action_new">
              <FontAwesomeIcon icon={faPlus} /> Добавить модуль
            </ActionButton>
          </TableComp>
        </>
      )
    );
}