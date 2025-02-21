import ProfileCoursesList from "./ProfileCoursesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import ProfileStats from "./ProfileStats";
import { useNavigate } from "react-router";
// import { useAppSelector } from "./hooks";
import "./ProfileData.css"

export default function ProfileData() {
    //navigate
    const navigate = useNavigate();

    // const user = useAppSelector((state) => {
    //     return state.user;
    // });

    // const profileCourses = user.courses.map((course) => {
    //     // return course
    // })

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
                <ProfileCoursesList></ProfileCoursesList>
        </div>

    )
}