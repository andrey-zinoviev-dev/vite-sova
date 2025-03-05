import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StudentCourseInterface } from "./intefaces/intefaces"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import "./TableProfileCourseData.css";
import ActionButton from "./ActionButton";
import EditWrapper from "./EditWrapper";

interface TableProfleButtonInterface {
    item: StudentCourseInterface,
    tarif: string,
    // handleClick: () => void,
}

export default function TableProfleCourseData({ item, tarif }: TableProfleButtonInterface) {
    const navigate = useNavigate();

    return (
        // <button className="button-table" onClick={handleClick}>
        <>
            {/* <div className="course__headline-wrapper">
                <span className="button-table__category">Вокал</span>
                <Link onClick={(evt) => {
                    evt.stopPropagation();
                }} to={`./edit/courses/${item._id}`}>
                    <FontAwesomeIcon icon={faGear} />
                </Link>
            </div> */}
            {/* <div className="button-table__top-wrapper">
                <span className="button-table__title">{item.title }
                <FontAwesomeIcon className={item.available ? "button-table__svg button-table__svg-color" : ""} icon={item.available ? faArrowRight : faLock} />
                </span>
                <span className="button-table__author">{item.author.name}</span>
            </div> */}
            <EditWrapper>
                <h3>{item.title}</h3>
                <ActionButton>
                    <FontAwesomeIcon icon={faGear} />
                </ActionButton>
            </EditWrapper>
            <div className="button-table__bot-wrapper">
                <span>Старт курса: {item.startDate}</span>
                <span>Тариф: {tarif}</span>
            </div>
            <p className="button-table__desc">{item.description}</p>
            
            <div className="button-table__progress-wrapper">
                <span>Пройдено</span>
                <div className="button-table__progress">
                <div className="button-table__progress-div">
                <div className="button-table__progress-div-inner" style={{width: "35%"}}></div>
                </div>
                <span>35%</span>
            </div>
            </div>
            <ActionButton onClick={() => {
                navigate(`../courses/${item._id}/modules`)
            }}>
                Продолжить
            </ActionButton>
        </>

        // </button>
    )
}