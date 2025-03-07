import ActionButton from "./ActionButton";
import EditWrapper from "./EditWrapper";
import { CourseInterface } from "./intefaces/intefaces";
import "./MainPageCourseData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

interface MainPageCourseDataInterface {
    item: CourseInterface,
    // handleClick: () => void,
}

export default function MainPageCourseData({ item }: MainPageCourseDataInterface) {
    //navigate
    const navigate = useNavigate();

    const courseLessons = item.modules && item.modules.flatMap((module) => {
        // console.log(module);
        return module.lessons;
    });

    const startTime = new Date(item.startDate).toLocaleDateString();

    return (
        <>
            
            {/* <span className="button-table__category">Поток: Britney</span> */}
            <EditWrapper>
                    <div className="button-table__bot-wrapper">
                        <span>Старт курса: {startTime}</span>
                        {/* <span>{startTime}</span> */}
                        {/* <span>Поток: Britney</span> */}
                    </div>
                    <ActionButton>
                        <FontAwesomeIcon icon={faGear} />
                    </ActionButton>
                </EditWrapper>
            <div className="button-table__top-wrapper">
                {/* <span className="button-table__title">{item.title}</span> */}
                <span className="button-table__title">{item.title}</span>
                <span className="button-table__author">{item.author.name}</span>
            </div>

            <div className="course__description-wrapper">
                <p className="button-table__desc">{item.description}</p>
                <span>Модули: {item.modules.length}</span>
                <span>Уроки: {courseLessons.length}</span>
            </div>
            
            {/* <div className="button-table__bot-wrapper">
                <span>Поток: Britney</span>
            </div> */}
            {/* <div className="button-table__bot-wrapper">
                <span>Старт курса: {startTime}</span>
                <span>Поток: Britney</span>
            </div> */}
            <ActionButton onClick={() => {
                navigate(`./courses/${item._id}/modules`);
            }}>
                Подробнее
            </ActionButton>
            {/* <button className="course-data__button_inverted-colors" onClick={handleClick}>Подробнее</button> */}
        </>
    )
}