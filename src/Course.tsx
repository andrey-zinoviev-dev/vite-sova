import { useParams } from "react-router";
import "./Course.css";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";
import RowList from "./RowList";

export default function Course() {
  const { courseId } = useParams();
  const { data = {} as CourseInterface} = useShowCoursesQuery(undefined, {
    selectFromResult: ({data}) => ({
      data: data?.find((course) => {
        return course._id === courseId;
      })
    })
  });

  // console.log(data);

  return (
    <>
      <h3>{data.title}</h3>
      {/* <h3>Модули курса</h3> */}
      {data.modules && <RowList items={data.modules}></RowList>}
    </>
  )
}