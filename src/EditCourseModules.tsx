import TableComp from "./TableComp";
// import TableElement from "./TableElement";
import { ModuleExtInterface, NewModuleType } from "./intefaces/intefaces";
import { useParams } from "react-router";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import EditWrapper from "./EditWrapper";
import EditElementWrapper from "./EditElementWrapper";
import { useState } from "react";
import PopupRight from "./PopupRight";
import Label from "./Label";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";

import {
  useDeleteModuleMutation,
  useShowCurrentCourseModulesQuery,
  useAddModuleMutation,
  // useEditModuleMutation,
} from "./store/features/apiSlice";
import EditCard from "./EditCard";
// import Switch from "./Switch";
import EditModule from "./EditModule";

export default function EditCourseModules() {
  const { courseId } = useParams();
  // const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
  //   courseId: courseId,
  // });

  // console.log(courseId);

  const { data = [] as ModuleExtInterface[] } =
    useShowCurrentCourseModulesQuery(courseId ? courseId : "");
  // console.log(data);

  const [modulePopup, setModulePopup] = useState(false);

  const [newModule, setNewModule] = useState<NewModuleType>({
    title: "",
    description: "",
    available: false,
    lessons: [],
    course: courseId ? courseId : "",
  });

  const [deleteModule] = useDeleteModuleMutation();
  const [addModule] = useAddModuleMutation();
  // const [editModule] = useEditModuleMutation();

  const [moduleToEdit, setModuleToEdit] = useState<{title: string, _id: string, description: string} | null>(
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
                  setModuleToEdit({
                    title: module.title,
                    _id: module._id,
                    description: module.description,
                  });
                }}
                onDeleteClick={() => {}}
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
          <h3>Добавить модуль</h3>
          <Form
            className=""
            onSubmit={(evt) => {
              evt.preventDefault();
              addModule(newModule)
                .unwrap()
                .then(() => {
                  setNewModule({
                    title: "",
                    description: "",
                    available: false,
                    lessons: [],
                    course: courseId ? courseId : "",
                  });
                  setModulePopup(false);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Label>
              Название модуля
              <Input
                type="text"
                onChange={(evt) =>
                  setNewModule({ ...newModule, title: evt.target.value })
                }
                placeholder={"Название модуля"}
              />
            </Label>
            <Label>
              Описание модуля
              <Textarea
                onChange={(evt) =>
                  setNewModule({
                    ...newModule,
                    description: evt.target.value,
                  })
                }
                placeholder={"Описание модуля"}
              />
            </Label>
            <ActionButton type="submit">Добавить модуль</ActionButton>
          </Form>
        </PopupRight>
      )}

      {moduleToEdit && (
        <PopupRight closePopup={() => setModuleToEdit(null)}>
          <EditModule module={moduleToEdit} />
          {/* <h3>Редактировать модуль</h3>
          <Switch
            isActive={moduleToEdit.available ? true : false}
            text={["Доступен", "Не доступен"]}
            onChange={() => {
              setModuleToEdit({
                ...moduleToEdit,
                available: !moduleToEdit.available,
              });
            }}
          />
          <Form
            className=""
            onSubmit={(evt) => {
              evt.preventDefault();
              editModule(moduleToEdit)
                .unwrap()
                .then(() => {
                  setModuleToEdit(null);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Label>
              Название модуля
              <Input
                type="text"
                onChange={(evt) =>
                  setModuleToEdit({
                    ...moduleToEdit,
                    title: evt.target.value,
                  })
                }
                defaultValue={moduleToEdit.title}
              />
            </Label>
            <Label>
              Описание модуля
              <Textarea
                onChange={(evt) =>
                  setModuleToEdit({
                    ...moduleToEdit,
                    description: evt.target.value,
                  })
                }
                defaultValue={moduleToEdit.description}
              />
            </Label>
          </Form>
          <ActionButton>Редактировать модуль</ActionButton> */}
        </PopupRight>
      )}

      {moduleToDelete && (
        <PopupRight
          closePopup={() => {
            setModuleToDelete(null);
            // setModuleId(null);
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
              // console.log(moduleId);
              // deleteModule(moduleId as string)
              //   .unwrap()
              //   .then(() => {
              //     setIsDelete(false);
              //     setModuleId(null);
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
            }}
          >
            Удалить модуль
          </ActionButton>
        </PopupRight>
      )}
    </>
  );
}
