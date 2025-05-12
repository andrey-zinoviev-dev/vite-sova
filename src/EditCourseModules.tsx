import TableComp from "./TableComp";
import TableElement from "./TableElement";
import {
  ModuleExtInterface,
  NewModuleType,
} from "./intefaces/intefaces";
import { useParams } from "react-router";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import EditElementWrapper from "./EditElementWrapper";
import { useState } from "react";
import PopupRight from "./PopupRight";
import Label from "./Label";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import DeleteButton from "./DeleteButton";
import {
  useDeleteModuleMutation,
  useShowCurrentCourseModulesQuery,
  useAddModuleMutation,
  useEditModuleMutation,
} from "./store/features/apiSlice";
import EditButton from "./EditButton";

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

  const [deleteModule, { isLoading }] = useDeleteModuleMutation();
  const [addModule, { isLoading: isLoadingAdd }] = useAddModuleMutation();
  const [editModule, { isLoading: isLoadingEdit }] = useEditModuleMutation();
  // const [editModule, { isLoading: isLoadingEdit }] = useEditModuleMutation();
  // const [moduleId, setModuleId] = useState<string | null>(null);
  // const [isDelete, setIsDelete] = useState(false);
  const [moduleToEdit, setModuleToEdit] = useState<ModuleExtInterface | null>(null);
  const [moduleToDelete, setModuleToDelete] = useState<ModuleExtInterface | null>(null);
  
  return (
    <>
      <EditElementWrapper>
        <h3>Модули</h3>
        <p>Редактируйте, добавляйте и удаляйте модули курса</p>
      </EditElementWrapper>
      <TableComp
        items={data}
        renderItem={(module) => {
          return (
            <TableElement>
              <EditWrapper>
                <h3>{module.title}</h3>
                <EditButton
                  onClick={() => {
                    setModuleToEdit(module);
                  }}
                />
              </EditWrapper>
              <p>{module.description}</p>
              <ActionButton
                className="button-action_delete"
                onClick={() => {
                  setModuleToDelete(module);
                }}
              >
                Удалить модуль
              </ActionButton>
            </TableElement>
          );
        }}
      >
        <ActionButton
          className="button-action_new"
          onClick={() => setModulePopup(true)}
        >
          <FontAwesomeIcon icon={faPlus} /> Добавить модуль
        </ActionButton>
      </TableComp>

      {modulePopup && (
        <PopupRight closePopup={() => setModulePopup(false)}>
          <div className="popup-right__content">
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
          </div>
        </PopupRight>
      )}

      {moduleToEdit && (
        <PopupRight closePopup={() => setModuleToEdit(null)}>
          <div className="popup-right__content">
            <h3>Редактировать модуль</h3>
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
              <ActionButton type="submit">Редактировать модуль</ActionButton>
            </Form>
          </div>
        </PopupRight>
      )}

      {moduleToDelete && (
        <PopupRight
          closePopup={() => {
            setModuleToDelete(null);
            // setModuleId(null);
          }}
        >
          <div className="popup-right__content">
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
          </div>
        </PopupRight>
      )}

      {/* {modulePopup && (
        <PopupRight closePopup={() => setModulePopup(false)}>
          <div className="popup-right__content">
            <h3>Добавить модуль</h3>
            <Form
              className=""
              onSubmit={(evt) => {
                evt.preventDefault();
                addModule(newModule)
                  .unwrap()
                  .then(() => {
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
                />
              </Label>
              <ActionButton type="submit">Добавить модуль</ActionButton>
            </Form>
          </div>
        </PopupRight>
      )} */}

      {/* {isDelete && (
        <PopupRight closePopup={() => setIsDelete(false)}>
          <div className="popup-right__content">
            <h3>Удалить модуль</h3>
            <p>Вы уверены, что хотите удалить {modueToEdit?.title}?</p>
            <ActionButton onClick={() => {
                // console.log(moduleId);
                deleteModule(moduleId as string)
                  .unwrap()
                  .then(() => {
                    setIsDelete(false);
                    setModuleId(null);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Удалить модуль</ActionButton>
          </div>
        </PopupRight>
      )} */}
    </>
  );
  // data._id && (
  //   <>
  //     <EditElementWrapper>
  //       <h3>Модули</h3>
  //       <p>Редактируйте, добавляйте и удаляйте модули курса</p>
  //     </EditElementWrapper>
  //     <TableComp
  //       items={data.modules}
  //       renderItem={(module) => {
  //         return (
  //           <TableElement>
  //             <EditWrapper>
  //               <h3>{module.title}</h3>
  //               <DeleteButton
  //                 onClick={() => {
  //                   deleteModule(module._id)
  //                     .unwrap()
  //                     .then((data) => {
  //                       console.log(data);
  //                     })
  //                     .catch((error) => {
  //                       console.log(error);
  //                     });
  //                 }}
  //               />
  //             </EditWrapper>
  //             <p>{module.description}</p>
  //             <ActionButton>Изменить модуль</ActionButton>
  //           </TableElement>
  //         );
  //       }}
  //     >
  //       <ActionButton
  //         className="button-action_new"
  //         onClick={() => setModulePopup(true)}
  //       >
  //         <FontAwesomeIcon icon={faPlus} /> Добавить модуль
  //       </ActionButton>
  //     </TableComp>

  //     {modulePopup && (
  //       <PopupRight closePopup={() => setModulePopup(false)}>
  //         <div className="popup-right__content">
  //           <h3>Добавить модуль</h3>
  //           <Form
  //             className=""
  //             onSubmit={(evt) => {
  //               evt.preventDefault();
  //               console.log(newModule);
  //               //   setModulePopup(false);
  //             }}
  //           >
  //             <Label>
  //               Название модуля
  //               <Input
  //                 type="text"
  //                 onChange={(evt) =>
  //                   setNewModule({ ...newModule, title: evt.target.value })
  //                 }
  //               />
  //             </Label>
  //             <Label>
  //               Описание модуля
  //               <Textarea
  //                 onChange={(evt) =>
  //                   setNewModule({
  //                     ...newModule,
  //                     description: evt.target.value,
  //                   })
  //                 }
  //               />
  //             </Label>
  //             <ActionButton type="submit">Добавить модуль</ActionButton>
  //           </Form>
  //         </div>
  //       </PopupRight>
  //     )}
  //   </>
  // )
}
