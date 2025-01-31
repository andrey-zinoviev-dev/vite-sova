import GenericList from "./GenericList";
import { useAppSelector } from "./hooks";
import ProfileCoursesList from "./ProfileCoursesList";
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
import { UserInterface } from "./store/features/userSlice";

export default function Profile() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
        <>
            <h2>С возвращением, {user.email}</h2>
            <div>
                <span>Ваши курсы</span>
                <ProfileCoursesList courses={user.courses}></ProfileCoursesList>
            </div>
        </>
    )
}