import { useParams } from "react-router"
import { CourseInterface } from "./intefaces/intefaces";
import { useShowCoursesQuery } from "./store/features/apiSlice";

export default function CourseInfo() {
    const { courseId } = useParams();

    const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
        selectFromResult: ({data}) => ({
          data: data?.find((course) => {
            return course._id === courseId;
          })
        })
    });

    return (
        <>
            <h2>{data.title}</h2>
        </>
    )
}