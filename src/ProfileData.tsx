// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import ProfileStats from "./ProfileStats";
import { useNavigate } from "react-router";
import { useAppSelector } from "./hooks";
import "./ProfileData.css";
import TableComp from "./TableComp";
import TableProfleCourseData from "./TableProfileCourseData";
import { StudentCourseInterface } from "./intefaces/intefaces";
import TableElement from "./TableElement";
// import ActionButton from "./ActionButton";
// import Calendar from "./Calendar";
import ProfileCalendar from "./ProfileCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileStatistics from "./ProfileStatistics";
import ActionButton from "./ActionButton";
import EditWrapper from "./EditWrapper";
import Highlight from "./Highlight";
import CardHeadline from "./CardHeadline";
import EditButton from "./EditButton";

export default function ProfileData() {
  //navigate
  const navigate = useNavigate();

  const user = useAppSelector((state) => {
    return state.user;
  });

  const userCourses = useAppSelector((state) => {
    return state.user.courses;
  });

  const profileCourses = userCourses.map((course) => {
    return course.course;
  }) as StudentCourseInterface[];

  const tarifs = userCourses.map((course) => {
    return course.tarif;
  }) as string[];

  return (
    <section className="profile-data">
      <div className="profile-data__wrapper profile-data__calendar">
        <h2 className="profile-data__headline">С возвращением, {user.name}!</h2>
        <div className="profile-data__calendar-wrapper">
          <ProfileCalendar />
          <ProfileStatistics />
        </div>
      </div>
      <div className="profile-data__wrapper profile-data__courses">
        <div className="profile-data__courses-headline">
          <h2 className="profile-data__headline">Ваши курсы</h2>
        </div>
        <TableComp
          items={profileCourses}
          renderItem={(item, index) => {
            const tarif = tarifs[index];
            return (
              <TableElement>
                <EditWrapper>
                  <Highlight>
                    <span>Тариф: {tarif}</span>
                  </Highlight>
                  <EditButton
                    onClick={() => {
                      navigate(`/courses/${item._id}/edit/general`);
                    }}
                  />
                </EditWrapper>

                <CardHeadline title={item.title}></CardHeadline>

                <p className="button-table__desc">{item.description}</p>

                {/* <div className="button-table__progress-wrapper">
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
                </div> */}
                <ActionButton
                  onClick={() => {
                    navigate(`../courses/${item._id}/modules`);
                  }}
                >
                  <span>Продолжить</span>
                  {/* {progress > 0 ? "Продолжить" : "Приступить"} */}
                </ActionButton>
              </TableElement>
            );
          }}
        >
          <ActionButton
            className="button-action_new"
            onClick={() => {
              navigate(`./addCourse`);
            }}
          >
            Добавить новый курс <FontAwesomeIcon icon={faPlus} />
          </ActionButton>
        </TableComp>
      </div>
    </section>
  );
}
