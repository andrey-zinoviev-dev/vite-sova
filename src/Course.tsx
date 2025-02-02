import { useParams } from "react-router";

import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";

export default function Course() {
  const { courseId } = useParams();
  const { data = {} as CourseInterface} = useShowCoursesQuery(undefined, {
    selectFromResult: ({data}) => ({
      data: data?.find((course) => {
        return course._id === courseId;
      })
    })
  });

  console.log(data);

  return (
    <>
      <h3>Курс {data.title}</h3>
      {}
      {/* <RowList items={}></RowList> */}
      {/* <GenericList className="" items={[{title: "Модуль 1", author: {name: "Дрис ван Зандт"}, available: true}, {title: "Модуль 2", author: {name: "Дрис ван Зандт"}, available: true}, {title: "Модуль 3", author: {name: "Дрис ван Зандт"}, available: false}, {title: "Модуль 4", author: {name: "Дрис ван Зандт"}, available: false}, {title: "Модуль 5", author: {name: "Дрис ван Зандт"}, available: false}]} renderItem={(module) => {
        return <CourseButton author={module.author} title={module.title} available={module.available}></CourseButton>
      }}></GenericList> */}
    </>
  )
}