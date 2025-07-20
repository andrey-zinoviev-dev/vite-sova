import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Input from "./Input";
import { CourseInterface } from "./intefaces/intefaces";
import Label from "./Label";
import { useShowCurrentCourseQuery } from "./store/features/apiSlice";
import Textarea from "./Textarea";
import "./EditCourseGeneral.css";
import Switch from "./Switch";
import EditElementWrapper from "./EditElementWrapper";
import FormContainer from "./FormContainer";
import { useEditCourseMutation } from "./store/features/apiSlice";
import EditFormContainer from "./EditFormContainer";

export default function EditCourseGeneral() {
  const { courseId } = useParams();

  const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
    courseId: courseId,
  });

  const [updateCourse, { isLoading, isSuccess }] = useEditCourseMutation();

  const [courseToUpdate, setCourseToUpdate] = useState<CourseInterface>(data);

  useEffect(() => {
    if (data._id) {
      setCourseToUpdate(data);
    }
  }, [data._id]);

  return (
    data._id && (
      <EditFormContainer />
      // <>
      //   <EditElementWrapper>
      //     <h3>Общие данные</h3>
      //     <p>Настройте название, описание, начало курса и доступ к нему</p>
      //   </EditElementWrapper>
      //   <EditElementWrapper>
      //     <h3>Доступ к курсу</h3>
      //     <Switch
      //       isActive={data.available}
      //       text={["Доступ к курсу открыт", "Доступ к курсу закрыт"]}
      //       onChange={() => {
      //         setCourseToUpdate({
      //           ...courseToUpdate,
      //           available: !courseToUpdate.available,
      //         });
      //       }}
      //     ></Switch>
      //   </EditElementWrapper>
      //   <EditElementWrapper>
      //     <h3>Видимость курса</h3>
      //     <Switch
      //       isActive={data.hidden}
      //       text={["Курс скрыт", "Курс не скрыт"]}
      //       onChange={() => {
      //         setCourseToUpdate({
      //           ...courseToUpdate,
      //           hidden: !courseToUpdate.hidden,
      //         });
      //       }}
      //     ></Switch>
      //   </EditElementWrapper>
      //   <EditElementWrapper>
      //     <FormContainer
      //       submitText={`Обновить ${data.title}`}
      //       submitFunc={() => {
      //         updateCourse(courseToUpdate);
      //       }}
      //       isLoading={isLoading}
      //       isSuccess={isSuccess}
      //       closeOnSubmit={() => {}}
      //     >
      //       <h3>Общие данные</h3>
      //       <p>Настройте название, описание, начало курса и доступ к нему</p>
      //       <Label>
      //         Название
      //         <Input
      //           defaultValue={courseToUpdate.title}
      //           onChange={(e) => {
      //             setCourseToUpdate({ ...courseToUpdate, title: e.target.value });
      //           }}
      //         />
      //       </Label>
      //       <Label>
      //         Описание
      //         <Textarea
      //           defaultValue={courseToUpdate.description}
      //           onChange={(e) => {
      //             setCourseToUpdate({ ...courseToUpdate, description: e.target.value });
      //           }}
      //         ></Textarea>
      //       </Label>
      //       <Label>
      //         Дата начала курса
      //         <Input
      //           type="date"
      //           defaultValue={courseToUpdate.startDate}
      //           onChange={(e) => {
      //             setCourseToUpdate({ ...courseToUpdate, startDate: e.target.value });
      //           }}
      //         ></Input>
      //       </Label>
      //     </FormContainer>
      //   </EditElementWrapper>
      // </>
    )
  );
}
