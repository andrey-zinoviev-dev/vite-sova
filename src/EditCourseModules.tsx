import TableComp from "./TableComp";
// import TableElement from "./TableElement";
import { ModuleExtInterface } from "./intefaces/intefaces";
import { useParams } from "react-router";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import EditWrapper from "./EditWrapper";
import EditElementWrapper from "./EditElementWrapper";
import { useState } from "react";
import PopupRight from "./PopupRight";

import {
  useDeleteModuleMutation,
  useShowCurrentCourseModulesQuery,
  // useEditModuleMutation,
} from "./store/features/apiSlice";
import EditCard from "./EditCard";
// import Switch from "./Switch";
import EditModule from "./EditModule";
import AddModule from "./AddModule";

export default function EditCourseModules() {
  const { courseId } = useParams();

  const { data = [] as ModuleExtInterface[] } =
    useShowCurrentCourseModulesQuery(courseId ? courseId : "");

  const [modulePopup, setModulePopup] = useState(false);

  const [deleteModule] = useDeleteModuleMutation();

  const [moduleToEdit, setModuleToEdit] = useState<ModuleExtInterface | null>(
    null
  );
  const [moduleToDelete, setModuleToDelete] =
    useState<ModuleExtInterface | null>(null);

  return (
    <>
      <EditElementWrapper>
        <h3>Модули</h3>
        <p>Редактируйте, добавляйте и удаляйте модули курса</p>
      </EditElementWrapper>
      <TableComp
        items={data}
        renderItem={(module, index) => {
          return (
            <li key={module._id}>
              <EditCard
                title={module.title}
                index={`${index + 1}`}
                onClick={() => {
                  setModuleToEdit(module);
                }}
                onDeleteClick={() => {
                  setModuleToDelete(module);
                }}
                buttonText="Удалить модуль"
              >
                <p>{module.description}</p>
              </EditCard>
            </li>
          );
        }}
      >
        <ActionButton
          className="button-action_new"
          onClick={() => setModulePopup(true)}
        >
          Добавить модуль
          <FontAwesomeIcon icon={faPlus} />
        </ActionButton>
      </TableComp>

      {modulePopup && (
        <PopupRight closePopup={() => setModulePopup(false)}>
          <AddModule
            courseId={courseId ? courseId : ""}
            closeOnSubmit={() => setModulePopup(false)}
          />
        </PopupRight>
      )}

      {moduleToEdit && (
        <PopupRight closePopup={() => setModuleToEdit(null)}>
          <EditModule
            module={moduleToEdit}
            closeOnSubmit={() => setModuleToEdit(null)}
          />
        </PopupRight>
      )}

      {moduleToDelete && (
        <PopupRight
          closePopup={() => {
            setModuleToDelete(null);
          }}
        >
          <h3>Удалить модуль</h3>
          <p>Вы уверены, что хотите удалить {moduleToDelete?.title}?</p>
          <ActionButton
            onClick={() => {
              deleteModule(moduleToDelete._id)
                .unwrap()
                .then(() => {
                  setModuleToDelete(null);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Удалить модуль
          </ActionButton>
        </PopupRight>
      )}
    </>
  );
}
