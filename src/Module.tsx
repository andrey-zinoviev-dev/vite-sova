import { useNavigate, useParams } from "react-router"
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface, ModuleExtInterface } from "./intefaces/intefaces";
import RowList from "./RowList";

import BackButton from "./BackButton";
import LessonButton from "./LessonButton";
// import NavigationLink from "./NavigationLink";
// import RowButton from "./RowButton";
// import LessonButton from "./LessonButton";
export default function Module() {
    const { courseId, moduleId } = useParams();

    const navigate = useNavigate();

    const { data = {} as CourseInterface } = useShowCoursesQuery(undefined, {
        selectFromResult: ({data}) => ({
        data: data?.find((course) => {
            return course._id === courseId;
        })
        })
    });

    const courseModule = data.modules && data.modules.find((module) => {
        return module._id === moduleId;
    }) as ModuleExtInterface;

    return (
        <>
            <BackButton text="Назад к модулям"></BackButton>
            {courseModule && courseModule.title && <span>{courseModule.title}</span>}
            {courseModule && courseModule.lessons && <RowList items={courseModule.lessons} renderItem={(item, index) => {
                return <LessonButton handleClick={() => {
                    navigate(`./lessons/${item._id}`);
                }} item={item} index={index + 1} available={item.available} edit={true}></LessonButton>
                // return <NavigationLink to={`./lessons/${item._id}`} available={item.available}>
                //        <LessonButton item={item} index={index + 1} available={item.available}></LessonButton>
                // </NavigationLink>
            }}></RowList>}
        </>
    )
}