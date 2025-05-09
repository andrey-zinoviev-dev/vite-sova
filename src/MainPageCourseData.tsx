import ActionButton from "./ActionButton";
import { CourseInterface } from "./intefaces/intefaces";
import "./MainPageCourseData.css";
import { useNavigate } from "react-router";
import Highlight from "./Highlight";

interface MainPageCourseDataInterface {
    item: CourseInterface,
    // handleClick: () => void,
}

export default function MainPageCourseData({ item }: MainPageCourseDataInterface) {
    //navigate
    const navigate = useNavigate();

    const startTime = new Date(item.startDate).toLocaleDateString();

    return (
      <>
        <Highlight>
          <span>Старт курса: {startTime}</span>
        </Highlight>
        <div className="button-table__top-wrapper">
          <span className="button-table__title">{item.title}</span>
          <span className="button-table__author">{item.author.name}</span>
        </div>

        <p className="button-table__desc">{item.description}</p>

        <ActionButton
          onClick={() => {
            navigate(`./courses/${item._id}`);
          }}
        >
          Изучить
        </ActionButton>
      </>
    );
}