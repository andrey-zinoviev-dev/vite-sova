import { useLocation, useNavigate, useParams } from "react-router"
import { useShowCoursesQuery } from "./store/features/apiSlice";
import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";
// import GenericList from "./GenericList";
import RowList from "./RowList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import RowButton from "./RowButton";
import BackButton from "./BackButton";

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
    // console.log(courseModule);
    const navigate = useNavigate();

    const location = useLocation();

    return (
        <>
            <BackButton text="Назад к модулям"></BackButton>
            <span>Модуль</span>
            {courseModule && courseModule.lessons && <RowList items={courseModule.lessons} renderItem={(item, index) => {
                return <RowButton index={index + 1} handleClick={() => {
                    navigate(`${location.pathname}/lessons/${item._id}`)
                }} item={item}></RowButton>
            }}></RowList>}
        </>
    )
}