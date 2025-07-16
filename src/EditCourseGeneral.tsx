import { useParams } from "react-router";
import Form from "./Form";
import Input from "./Input";
import { CourseInterface } from "./intefaces/intefaces";
import Label from "./Label";
import { useShowCurrentCourseQuery } from "./store/features/apiSlice";
import Textarea from "./Textarea";
import ActionButton from "./ActionButton";
import "./EditCourseGeneral.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Switch from "./Switch";
import EditElementWrapper from "./EditElementWrapper";
// import HeadlineWrapper from "./HeadlineWrapper";

export default function EditCourseGeneral() {
  const { courseId } = useParams();

  const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
    courseId: courseId,
  });
  

  return (
    data._id && (
      <>
        <EditElementWrapper>
          <h3>Общие данные</h3>
          <p>Настройте название, описание, начало курса и доступ к нему</p>
        </EditElementWrapper>
        <EditElementWrapper>
          <h3>Доступ к курсу</h3>
          <Switch
            isActive={data.available}
            text={["Доступ к курсу открыт", "Доступ к курсу закрыт"]}
            onChange={() => {}}
          ></Switch>
        </EditElementWrapper>
        <EditElementWrapper>
          <Form
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
            className=""
          >
            <Label>
              Название
              <Input defaultValue={data.title} />
            </Label>
            <Label>
              Описание
              <Textarea defaultValue={data.description}></Textarea>
            </Label>
            <Label>
              Дата начала курса
              <Input type="date" defaultValue={data.startDate}></Input>
            </Label>
            <ActionButton>Обновить {data.title}</ActionButton>
          </Form>
        </EditElementWrapper>
      </>
    )
  );
}
