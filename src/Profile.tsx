import { useAppSelector } from "./hooks";
import ProfileCoursesList from "./ProfileCoursesList";
import ProfileStats from "./ProfileStats";
import "./Profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router";

export default function Profile() {

    return (
        <section className="profile">
            <Outlet></Outlet>
            {/* <div>
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
            <ProfileStats></ProfileStats> */}
        </section>
    )
}