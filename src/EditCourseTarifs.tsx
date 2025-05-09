import { useParams } from "react-router";
import { CourseInterface } from "./intefaces/intefaces";
import { useShowCurrentCourseQuery } from "./store/features/apiSlice";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
import EditWrapper from "./EditWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditElementWrapper from "./EditElementWrapper";
import ActionButton from "./ActionButton";

export default function EditCourseStudentsTarifs() {
    const { courseId } = useParams();

    const { data = {} as CourseInterface } = useShowCurrentCourseQuery({ courseId: courseId });
    console.log(data.tarifs);

    return (
      data._id && (
        <>
          <EditElementWrapper>
            <h3>Тарифы</h3>
          </EditElementWrapper>
          <TableComp
            items={data.tarifs}
            renderItem={(item) => {
              const endDate = new Date(item.expire).toLocaleDateString();

              return (
                <TableElement>
                  <EditWrapper>
                    <span>{item.title}</span>
                    <ActionButton className="button-action_svg">
                      <FontAwesomeIcon icon={faPen} />
                    </ActionButton>
                  </EditWrapper>
                  <span>Истекает: {endDate}</span>
                  <ActionButton>
                    Изменить тариф
                  </ActionButton>
                </TableElement>
              );
            }}
          >
            <ActionButton className="button-action_new">
              <FontAwesomeIcon icon={faPlus} />
              Новый тариф
            </ActionButton>
          </TableComp>
        </>
      )
      // <div>
      //     <div>
      //         <h3>Ученики</h3>
      //     </div>
      //     <div>
      //         <h3>Тарифы</h3>
      //         <TableComp items={[]} renderItem={() => {
      //             return <span></span>
      //         }}>

      //         </TableComp>
      //     </div>
      // </div>
    );
}