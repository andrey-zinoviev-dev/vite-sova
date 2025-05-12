import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StudentCourseInterface } from "./intefaces/intefaces";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./TableProfileCourseData.css";
import ActionButton from "./ActionButton";
import EditWrapper from "./EditWrapper";
import Highlight from "./Highlight";
// import { useMemo } from "react";

interface TableProfleButtonInterface {
  item: StudentCourseInterface;
  tarif: string;
  // handleClick: () => void,
}

export default function TableProfleCourseData({
  item,
  tarif,
}: TableProfleButtonInterface) {
  const navigate = useNavigate();

  //completed lessons
  // const progress = useMemo(() => {
  //     return item.modules.reduce((accumulator, calcItem) => {
  //         const completedLessons = calcItem.lessons.filter((lesson) => {
  //             return lesson.completed;
  //         });
  //         return accumulator + completedLessons.length;
  //     }, 0);
  // }, [item.modules]);

  const progress = 5;

  return (
    <>
      <EditWrapper>
        <Highlight>
            <span>Тариф: {tarif}</span>
        </Highlight>
        <ActionButton
          className="button-action_svg"
          onClick={() => {
            navigate(`/courses/${item._id}/edit`);
          }}
        >
          <FontAwesomeIcon icon={faGear} />
        </ActionButton>
      </EditWrapper>

      <span>{item.title}</span>

      <p className="button-table__desc">{item.description}</p>

      <div className="button-table__progress-wrapper">
        <span>Пройдено</span>
        <div className="button-table__progress">
          <div className="button-table__progress-div">
            <div
              className="button-table__progress-div-inner"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{progress}%</span>
        </div>
      </div>
      <ActionButton
        onClick={() => {
          navigate(`../courses/${item._id}/modules`);
        }}
      >
        {progress > 0 ? "Продолжить" : "Приступить"}
      </ActionButton>
    </>

    // </button>
  );
}
