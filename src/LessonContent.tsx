import "./LessonContent.css";
import { useShowCurrentLessonQuery } from "./store/features/apiSlice";

import { useNavigate, useParams } from "react-router";
import ActionButton from "./ActionButton";
import { LessonInterface } from "./intefaces/intefaces";
import LinkComp from "./LinkComp";
import TipTap from "./Tiptap";

export default function LessonContent() {
  const navigate = useNavigate();

  const { lessonId } = useParams();

  const { data = {} as LessonInterface } = useShowCurrentLessonQuery({
    lessonId: lessonId,
  });

  const lessonIndex = data._id
    ? data.module.lessons.findIndex((lesson) => lesson._id === lessonId)
    : 0;

  return data._id && (
    <>
      <h2 className="lesson-title">{data.title}</h2>
      <div className="lesson__content">
        <TipTap content={data.content} isEditable={false} />
        {/* <p>
          Обратите внимание на произношение сложных, парных согласных и
          продолжайте работать над песнями, исходя из этого. Песни на ваш выбор
          тоже можно, если нет проблем по работе с диапазоном.
        </p>
        <img src="https://cdn.mohen-tohen.ru/IMG_20241127_232821_046.jpg"></img>
        <p>Вот тут еще текст</p>
        <img src="https://cdn.mohen-tohen.ru/56fa6f6622512890e8bc08085f65ad92.jpg"></img> */}
      </div>
      <div className="lesson__content-buttons">
        {data._id && (
          <div className="lesson__content-buttons-navigation">
            {lessonIndex > 0 && (
              <LinkComp
                className="lesson__content-buttons-navigation-button"
                to={`/courses/${data.module.course._id}/modules/${
                  data.module._id
                }/lessons/${data.module.lessons[lessonIndex - 1]._id}`}
              >
                Предыдущий урок
              </LinkComp>
            )}
            {lessonIndex < data.module.lessons.length - 1 && (
              <LinkComp
                className="lesson__content-buttons-navigation-button"
                to={`/courses/${data.module.course._id}/modules/${
                  data.module._id
                }/lessons/${data.module.lessons[lessonIndex + 1]._id}`}
              >
                Следующий урок
              </LinkComp>
            )}
          </div>
        )}
        <ActionButton
          onClick={() => {
            navigate("./chat");
          }}
        >
          Выполнить задание
        </ActionButton>
      </div>
    </>
  );
}
