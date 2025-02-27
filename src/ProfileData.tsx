import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import ProfileStats from "./ProfileStats";
import { useNavigate } from "react-router";
import { useAppSelector } from "./hooks";
import "./ProfileData.css"
import TableComp from "./TableComp";
import TableButton from "./TableButton";
import TableProfleCourseData from "./TableProfileCourseData";
import { StudentCourseInterface } from "./intefaces/intefaces";

export default function ProfileData() {
    //navigate
    const navigate = useNavigate();

    const userCourses = useAppSelector((state) => {
        return state.user.courses;
    });

    const profileCourses = userCourses.map((course) => {
        return course.course;
    }) as StudentCourseInterface[];

    // const userTarifs

    return (
        <div className="profile-data">
            <div className="profile-data__courses-wrapper">
                <h2 className="profile-data__headline">Ваши курсы</h2>
                <button className="profile-data__addCourse-button" onClick={() => {
                    navigate(`./addCourse`);
                }}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <span>Добавить новый курс</span>
                </button>
            </div>
            <TableComp items={profileCourses} renderItem={(item) => {
                return <TableButton onClick={() => {
                    navigate(`../courses/${item._id}/modules`)
                }}>
                    <TableProfleCourseData item={item} />
                </TableButton>
            }}></TableComp>
        </div>

    )
}