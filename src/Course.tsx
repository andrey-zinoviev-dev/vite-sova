import { useLocation, useNavigate, useParams } from "react-router";
import "./Course.css";
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface } from "./store/features/courseSlice";


// import TableComp from "./TableComp";
// import GenericList from "./GenericList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TableComp from "./TableComp";
import TableButton from "./TableButton";
import BackButton from "./BackButton";

export default function Course() {
  const { courseId } = useParams();
  const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
    selectFromResult: ({data}) => ({
      data: data?.find((course) => {
        return course._id === courseId;
      })
    })
  });

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <BackButton text="Назад к курсам"></BackButton>

      <h3>{data.title}</h3>

      {data.modules && <TableComp items={data.modules} renderItem={(item, index) => {
        return <TableButton item={item} disabled={item.available} handleClick={() => {
          // console.log(item);
          navigate(`${location.pathname}/modules/${item._id}`);
        }}></TableButton>
      }}></TableComp>}
    </>
  )
}