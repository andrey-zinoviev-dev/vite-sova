import { useAppSelector } from "./hooks";
import ProfileCoursesList from "./ProfileCoursesList";
import ProfileStats from "./ProfileStats";
import "./Profile.css"

export default function Profile() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
        <section className="profile">
            <div>
                <h2>С возвращением, {user.email}</h2>
                <div>
                    <span>Ваши курсы</span>
                    <ProfileCoursesList courses={user.courses}></ProfileCoursesList>
                </div>
            </div>
            <ProfileStats></ProfileStats>
        </section>
    )
}