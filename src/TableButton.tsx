interface TableButton<T> {
  item: T,
  // children: React.ReactNode | React.ReactNode[],
  handleClick: (item: T) => void,
  disabled: boolean,
};

import "./TableButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { CourseInterface, ModuleInterface, StudentCourseInterface } from "./intefaces/intefaces";

export default function TableButton<T extends CourseInterface | ModuleInterface | StudentCourseInterface >({ item, disabled, handleClick }: TableButton<T>) {
  return (
    <button disabled={!disabled} className="button-table" onClick={() => handleClick(item)}>
      <span className="button-table__category">Вокал</span>
      <div className="button-table__top-wrapper">
        <span className="button-table__title">{item.title }
          <FontAwesomeIcon className={item.available ? "button-table__svg button-table__svg-color" : ""} icon={item.available ? faArrowRight : faLock} />
        </span>
        {/* <span className="button-table__author">{item.author.name}</span> */}
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
      <div className="button-table__bot-wrapper">
        <span>Старт курса</span>
        <span>30.01.2025</span>
      </div>
    </button>
  )
}