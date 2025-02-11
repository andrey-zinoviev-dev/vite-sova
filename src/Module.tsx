import { useParams } from "react-router"
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";
import RowList from "./RowList";

import BackButton from "./BackButton";
import LessonButton from "./LessonButton";
import NavigationLink from "./NavigationLink";

export default function Module() {
    const { courseId, moduleId } = useParams();
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
            <span>Модуль</span>
            {courseModule && courseModule.lessons && <RowList items={courseModule.lessons} renderItem={(item, index) => {
                return <NavigationLink to={`./lessons/${item._id}`}>
                    <LessonButton item={item} index={index + 1}></LessonButton>
                </NavigationLink>
            }}></RowList>}
        </>
    )
}