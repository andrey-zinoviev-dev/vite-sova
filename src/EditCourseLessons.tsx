import EditElementWrapper from "./EditElementWrapper";
import TableComp from "./TableComp";
import { useParams } from "react-router";
import {
  useShowCurrentCourseLessonsQuery,
  useShowCurrentCourseModulesQuery,
} from "./store/features/apiSlice";
import EditCard from "./EditCard";

import ActionButton from "./ActionButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PopupRight from "./PopupRight";
import EditLesson from "./EditLesson";
import {
  ModuleExtInterface,
  StreamLessonInterface,
} from "./intefaces/intefaces";
import AddLesson from "./AddLesson";

import DeleteLesson from "./DeleteLesson";

export default function EditCourseLessons() {
  const { courseId } = useParams();

  const { data: lessons = [] } = useShowCurrentCourseLessonsQuery(
    courseId as string
  );

  const { data: modules = [] as ModuleExtInterface[] } =
    useShowCurrentCourseModulesQuery(courseId as string);

  const [lessonToEdit, setLessonToEdit] = useState<string | null>(null);

  const [isNewLessonPopupOpen, setIsNewLessonPopupOpen] = useState(false);

  const [lessonToDelete, setLessonToDelete] =
    useState<StreamLessonInterface | null>(null);

  //test array sorted
  const sortedLessons = [...lessons].sort((a, b) => {
    return (
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime()
    );
  });

  return (
    <>
      <EditElementWrapper>
        <h3>Уроки</h3>
        <p>Редактируйте, добавляйте и удаляйте уроки курса</p>
      </EditElementWrapper>
      <TableComp
        items={sortedLessons}
        renderItem={(item, index) => {
          return (
            <li key={item._id}>
              <EditCard
                title={item.title}
                index={`${index + 1}`}
                onClick={() => {
                  setLessonToEdit(item._id);
                }}
                onDeleteClick={() => {
                  setLessonToDelete(item);
                }}
                buttonText="Удалить урок"
              >
                <span>Модуль: {item.module.title}</span>
                <span>Доступ: {item.available ? "открыт" : "закрыт"}</span>
              </EditCard>
            </li>
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
        <PopupRight
          closePopup={() => {
            setLessonToEdit(null);
          }}
        >
          <EditLesson
            closeOnSubmit={() => {
              setLessonToEdit(null);
            }}
            modules={modules}
            lessonId={lessonToEdit}
          ></EditLesson>
        </PopupRight>
      )}

      {isNewLessonPopupOpen && (
        <PopupRight
          closePopup={() => {
            setIsNewLessonPopupOpen(false);
          }}
        >
          <AddLesson
            modules={modules}
            closeOnSubmit={() => {
              setIsNewLessonPopupOpen(false);
            }}
          ></AddLesson>
        </PopupRight>
      )}

      {lessonToDelete?._id && (
        <PopupRight
          closePopup={() => {
            setLessonToDelete(null);
          }}
        >
          <DeleteLesson
            lessonId={lessonToDelete._id as string}
            closeOnSubmit={() => {
              setLessonToDelete(null);
            }}
          ></DeleteLesson>
        </PopupRight>
      )}
    </>
  );
}
