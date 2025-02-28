import { CourseInterface } from "./intefaces/intefaces";
import "./MainPageCourseData.css";

interface MainPageCourseDataInterface {
    item: CourseInterface,
}

export default function MainPageCourseData({ item }: MainPageCourseDataInterface) {
    const courseLessons = item.modules && item.modules.flatMap((module) => {
        // console.log(module);
        return module.lessons;
    });

    const startTime = new Date(item.startDate).toLocaleDateString();

    return (
        <>
            <span className="button-table__category">Поток: Britney</span>
            <div className="button-table__top-wrapper">
                <span className="button-table__title">{item.title}</span>
                <span className="button-table__author">{item.author.name}</span>
            </div>
            <div className="course__description-wrapper">
                <p className="button-table__desc">{item.description}</p>
                <span>Модули: {item.modules.length}</span>
                <span>Уроки: {courseLessons.length}</span>
            </div>
            <div className="button-table__bot-wrapper">
                <span>Старт курса</span>
                <span>{startTime}</span>
            </div>
        </>
    )
}