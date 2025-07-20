import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import EditElementWrapper from "./EditElementWrapper";
import TableComp from "./TableComp";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  useEditLessonStreamsMutation,
  useShowCurrentCourseLessonsQuery,
  useShowStreamsQuery,
  useDeleteStreamMutation,
  useAddStreamMutation,
} from "./store/features/apiSlice";
import { Form, useParams } from "react-router";
import {
  StreamInterface,
  StreamLessonInterface,
  NewStreamType,
} from "./intefaces/intefaces";
import EditCard from "./EditCard";
import { useState } from "react";
import PopupRight from "./PopupRight";
import SwtichCard from "./SwtichCard";
import Label from "./Label";
import Input from "./Input";
import AddFromContainer from "./AddFromContainer";
import EditFormContainer from "./EditFormContainer";
// import Warning from "./Warning";
export default function EditCourseStreams() {
  const { courseId } = useParams();

  //streams query
  const { data = [] as StreamInterface[] } = useShowStreamsQuery(
    courseId as string
  );

  //lessons query
  const { data: lessons = [] as StreamLessonInterface[] } =
    useShowCurrentCourseLessonsQuery(courseId as string);

  //stream to edit
  const [streamToEdit, setStreamToEdit] = useState<StreamInterface | null>(
    null
  );

  //lessons to update
  const [lessonsToUpdate, setLessonsToUpdate] = useState<
    StreamLessonInterface[]
  >([]);

  const [newStream, setNewStream] = useState<NewStreamType>({
    title: "",
    startDate: "",
    course: courseId as string,
  });

  const [addPopupOpened, setAddPopupOpened] = useState(false);

  const [addStream] = useAddStreamMutation();

  //functions
  function handleLessonToggle(lesson: StreamLessonInterface) {
    setLessonsToUpdate((prevValue) => {
      const lessonInStream = prevValue.find((prevLesson) => {
        return prevLesson._id === lesson._id;
      });

      if (lessonInStream) {
        return prevValue.map((prevLesson) => {
          return prevLesson._id === lesson._id
            ? { ...prevLesson, active: !prevLesson.active }
            : prevLesson;
        });
      } else {
        return [...prevValue, { ...lesson, active: true }];
      }
    });
  }

  const [streamToDelete, setStreamToDelete] = useState<StreamInterface | null>(
    null
  );
  const [editLessonStreams] = useEditLessonStreamsMutation();

  const [deleteStream] = useDeleteStreamMutation();

  return (
    <>
      <EditElementWrapper>
        <h3>Потоки</h3>
        <p>Редактируйте, добавляйте и удаляйте потоки курса</p>
      </EditElementWrapper>
      <TableComp
        items={data}
        renderItem={(item, index) => {
          const streamStartDate = new Date(item.startDate).toLocaleString();
          return (
            <li key={item._id}>
              <EditCard
                title={item.title}
                index={(index + 1).toString()}
                onClick={() => {
                  setStreamToEdit(item);
                }}
                buttonText={"Удалить поток"}
                onDeleteClick={() => {
                  setStreamToDelete(item);
                }}
              >
                <span>Дата начала: {streamStartDate}</span>
                <span>Уроков в потоке: {item.lessons.length}</span>
              </EditCard>
            </li>
          );
        }}
      >
        <ActionButton
          className="button-action_new"
          onClick={() => setAddPopupOpened(true)}
        >
          Добавить поток <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </ActionButton>
      </TableComp>

      {streamToEdit && (
        <PopupRight
          closePopup={() => {
            setStreamToEdit(null);
            setLessonsToUpdate([]);
          }}
        >
          <EditFormContainer />
          {/* <h3>{streamToEdit.title}</h3>
          <Form>
            <Label>
              Название потока
              <Input
                type="text"
                defaultValue={streamToEdit.title}
                placeholder="Название потока"
              />
            </Label>
            <Label>
              Дата начала потока
              <Input
                type="date"
                placeholder="Дата начала потока"
                defaultValue={streamToEdit.startDate.split("T")[0]}
              />
            </Label>
          </Form>
          <p>Выберите уроки, которые будут в потоке</p>
          <TableComp
            items={lessons}
            renderItem={(item) => {
              const lessonInStream = streamToEdit.lessons.find(
                (lesson) => lesson._id === item._id
              );

              return (
                <li key={item._id}>
                  <SwtichCard
                    title={item.title}
                    isActive={lessonInStream ? true : false}
                    invert={true}
                    text={["В потоке", "Не в потоке"]}
                    onChange={() => {
                      handleLessonToggle(item);
                    }}
                  ></SwtichCard>
                </li>
              );
            }}
          ></TableComp>
          <ActionButton
            onClick={() => {
              editLessonStreams({
                streamId: streamToEdit._id,
                lessons: lessonsToUpdate,
              })
                .unwrap()
                .then(() => {
                  // console.log("stream updated");
                  setStreamToEdit(null);
                  setLessonsToUpdate([]);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Обновить {streamToEdit.title}
          </ActionButton> */}
        </PopupRight>
      )}

      {streamToDelete && (
        <PopupRight closePopup={() => setStreamToDelete(null)}>
          <p>Вы действительно хотите удалить поток {streamToDelete.title}?</p>
          <ActionButton
            onClick={() => {
              deleteStream(streamToDelete._id as string)
                .unwrap()
                .then(() => {
                  setStreamToDelete(null);
                });
            }}
          >
            Удалить поток
          </ActionButton>
        </PopupRight>
      )}

      {addPopupOpened && (
        <PopupRight closePopup={() => setAddPopupOpened(false)}>
          <AddFromContainer />
          {/* <h3>Добавить поток</h3>
          <Form>
            <Label>
              Название потока
              <Input
                onChange={(e) =>
                  setNewStream({ ...newStream, title: e.target.value })
                }
                type="text"
                placeholder="Название потока"
              />
            </Label>
            <Label>
              Дата начала потока
              <Input
                onChange={(e) =>
                  setNewStream({ ...newStream, startDate: e.target.value })
                }
                type="date"
                placeholder="Дата начала потока"
              />
            </Label>
          </Form>
          <ActionButton
            onClick={() => {
              addStream(newStream)
                .unwrap()
                .then(() => {
                  setAddPopupOpened(false);
                });
            }}
          >
            Добавить поток
          </ActionButton> */}
        </PopupRight>
      )}
    </>
  );
}
