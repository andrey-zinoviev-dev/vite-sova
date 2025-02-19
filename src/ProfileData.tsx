import ProfileCoursesList from "./ProfileCoursesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ProfileStats from "./ProfileStats";
import { useNavigate } from "react-router";
import { useAppSelector } from "./hooks";

export default function ProfileData() {
    //navigate
    const navigate = useNavigate();

    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
        <>
                <div>
                <h2>С возвращением, {user.email}</h2>
                <div>
                    <span>Ваши курсы</span>
                    <button onClick={() => {
                        navigate(`./addCourse`);
                    }}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                    <ProfileCoursesList courses={user.courses}></ProfileCoursesList>
                </div>
            </div>
            <ProfileStats></ProfileStats>
            {/* </div> */}
        </>

    )
}