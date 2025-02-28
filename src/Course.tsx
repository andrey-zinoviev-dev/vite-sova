import { useNavigate, useParams } from "react-router";
import "./Course.css";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./intefaces/intefaces";

import TableComp from "./TableComp";
import TableButton from "./TableButton";
import BackButton from "./BackButton";
import ModuleData from "./ModuleData";

export default function Course() {
  const { courseId } = useParams();
  const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
    selectFromResult: ({data}) => ({
      data: data?.find((course) => {
        return course._id === courseId;
      })
    })
  });

  const navigate = useNavigate();

  return (
    <>
      <BackButton text="Назад"></BackButton>

      <h3>{data.title}</h3>

      {data.modules && <TableComp items={data.modules} renderItem={(item) => {
        return <TableButton onClick={() => {
          navigate(`./${item._id}`);
        }}>
          <ModuleData item={item}></ModuleData>
        </TableButton>
      }}></TableComp>}
    </>
  )
}