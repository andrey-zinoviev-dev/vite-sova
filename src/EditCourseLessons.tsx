// import CommonCard from "./CommonCard";
import EditElementWrapper from "./EditElementWrapper";
// import { LessonInterf, StreamLessonInterfaceace } from "./intefaces/intefaces";
import TableComp from "./TableComp";
import { Form, useParams } from "react-router";
import {
  useShowCurrentCourseLessonsQuery,
  useShowCurrentCourseModulesQuery,
  useEditLessonMutation,
  useAddLessonMutation,
} from "./store/features/apiSlice";
import EditCard from "./EditCard";
import { useState } from "react";
import PopupRight from "./PopupRight";
import Label from "./Label";
import Input from "./Input";
import ActionButton from "./ActionButton";
import TipTap from "./Tiptap";
import Switch from "./Switch";
import { ModuleExtInterface, NewLessonType, StreamLessonInterface } from "./intefaces/intefaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function EditCourseLessons() {
  const { courseId } = useParams();

  const { data: lessons = [] } = useShowCurrentCourseLessonsQuery(
    courseId as string
  );
  // console.log(lessons);

  const { data: modules = [] } = useShowCurrentCourseModulesQuery(
    courseId as string
  );

  const [lessonToEdit, setLessonToEdit] =
    useState<StreamLessonInterface | null>(null);

  const [isNewLessonPopupOpen, setIsNewLessonPopupOpen] = useState(false);

  const [newLesson, setNewLesson] = useState<NewLessonType>({
    title: "",
    module: "",
    available: false,
    content: {
      type: "doc",
      content: [],
    },
  });

  const [editLesson] = useEditLessonMutation();

  const [addLesson] = useAddLessonMutation();

  // console.log(lessonToEdit);

  return (
    <>
      <EditElementWrapper>
        <h3>Уроки</h3>
        <p>Редактируйте, добавляйте и удаляйте уроки курса</p>
      </EditElementWrapper>
      <TableComp
        items={lessons}
        renderItem={(item, index) => {
          return (
            <EditCard
              title={item.title}
              index={`${index + 1}`}
              onClick={() => {
                setLessonToEdit(item);
              }}
              onDeleteClick={() => {}}
              buttonText="Удалить урок"
            >
              <span>Модуль: {item.module.title}</span>
              <span>Доступ: {item.available ? "открыт" : "закрыт"}</span>
            </EditCard>
          );
        }}
      >
        <ActionButton
          className="button-action_new"
          onClick={() => {
            setIsNewLessonPopupOpen(true);
          }}
        >
          Добавить урок <FontAwesomeIcon icon={faPlus} />
        </ActionButton>
      </TableComp>

      {lessonToEdit && (
        <PopupRight closePopup={() => setLessonToEdit(null)}>
          <h3>Редактирование урока</h3>
          <Form>
            <Label>
              Название урока
              <Input
                type="text"
                defaultValue={lessonToEdit.title}
                placeholder="Название урока"
                onChange={(e) => {
                  setLessonToEdit((prevValue) => {
                    if (!prevValue) return null;
                    return {
                      ...prevValue,
                      title: e.target.value,
                    };
                  });
                }}
              />
            </Label>
            <Label>
              Модуль, в котором находится урок
              <select
                onChange={(e) => {
                  setLessonToEdit((prevValue) => {
                    if (!prevValue) return null;
                    return {
                      ...prevValue,
                      module: modules.find(
                        (module) => module._id === e.target.value
                      ) as ModuleExtInterface,
                    };
                  });
                }}
                defaultValue={
                  modules.find(
                    (module) => module._id === lessonToEdit.module._id
                  )?._id
                }
              >
                <option value="">Выберите модуль</option>
                {modules.map((module) => {
                  return (
                    <option key={module._id} value={module._id}>
                      {module.title}
                    </option>
                  );
                })}
              </select>
            </Label>
          </Form>
          <Switch
            isActive={lessonToEdit.available}
            text={["Доступен", "Не доступен"]}
            onChange={() => {
              setLessonToEdit({
                ...lessonToEdit,
                available: !lessonToEdit.available,
              });
            }}
          />
          <div>
            <span>Контент урока</span>
            <TipTap
              updateContent={(content) => {
                setLessonToEdit((prevValue) => {
                  if (!prevValue) return null;
                  return {
                    ...prevValue,
                    content: content,
                  };
                });
              }}
              content={lessonToEdit.content}
            />
          </div>
          <ActionButton
            onClick={() => {
              editLesson(lessonToEdit)
                .unwrap()
                .then(() => {
                  setLessonToEdit(null);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Обновить урок
          </ActionButton>
        </PopupRight>
      )}
      {isNewLessonPopupOpen && (
        <PopupRight
          closePopup={() => {
            setIsNewLessonPopupOpen(false);
          }}
        >
          <h3>Добавить урок</h3>
          <Switch
            isActive={newLesson.available}
            text={["Доступен", "Не доступен"]}
            onChange={() => {
              setNewLesson({
                ...newLesson,
                available: !newLesson.available,
              });
            }}
          />
          <Form>
            <Label>
              Название урока
              <Input
                type="text"
                defaultValue={newLesson.title}
                placeholder="Название урока"
                onChange={(e) => {
                  setNewLesson((prevValue) => {
                    return {
                      ...prevValue,
                      title: e.target.value,
                    };
                  });
                }}
              />
            </Label>
            <Label>
              Модуль, в котором находится урок
              <select
                onChange={(e) => {
                  setNewLesson((prevValue) => {
                    return {
                      ...prevValue,
                      module: e.target.value,
                    };
                  });
                }}
              >
                <option value="">Выберите модуль</option>
                {modules.map((module) => {
                  return (
                    <option key={module._id} value={module._id}>
                      {module.title}
                    </option>
                  );
                })}
              </select>
            </Label>
            <ActionButton
              onClick={() => {
                addLesson(newLesson)
                  .unwrap()
                  .then(() => {
                    setIsNewLessonPopupOpen(false);
                    setNewLesson({
                      title: "",
                      module: "",
                      available: false,
                      content: {
                        type: "doc",
                        content: [],
                      },
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Добавить урок
            </ActionButton>
          </Form>
          <div>
            <span>Контент урока</span>
            <TipTap
              updateContent={(content) => {
                setNewLesson((prevValue) => {
                  return {
                    ...prevValue,
                    content: content,
                  };
                });
              }}
            ></TipTap>
          </div>
        </PopupRight>
      )}
    </>
  );
}
