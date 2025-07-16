import { useAppSelector } from "./hooks";
import "./ProfileData.css";
// import TableComp from "./TableComp";
// import { StudentCourseInterface } from "./intefaces/intefaces";

// import ProfileCalendar from "./ProfileCalendar";

// import ProfileStatistics from "./ProfileStatistics";

// import CourseCard from "./CourseCard";
// import ActionButton from "./ActionButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router";
import AdminCourses from "./AdminCourses";
import StudentCourses from "./StudentCourses";

export default function ProfileData() {
  // const navigate = useNavigate();
  const user = useAppSelector((state) => {
    return state.user;
  });

  const isAdmin = user.roles.includes("admin");

  // const userCourses = user.tarifs.map((tarif) => {
  //   return { ...tarif.course, tarif: tarif.title };
  // }) as StudentCourseInterface[];

  return (
    <section className="profile-data">
      <div className="profile-data__wrapper profile-data__calendar">
        <h2 className="profile-data__headline">С возвращением, {user.name}!</h2>
        {/* <div className="profile-data__calendar-wrapper">
          <ProfileCalendar />
          <ProfileStatistics />
        </div> */}
      </div>
      <div className="profile-data__wrapper profile-data__courses">
        <div className="profile-data__courses-headline">
          <h2 className="profile-data__headline">Ваши курсы</h2>
        </div>
        {isAdmin ? <AdminCourses /> : <StudentCourses />}
      </div>
    </section>
  );
}
