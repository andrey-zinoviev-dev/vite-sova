import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "./hooks";
import { UserInterface } from "./store/features/userSlice";
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    // const user = useAppSelector((state) => {
    //     return state.user;
    // });

    // console.log(user);

    const { data = {} as UserInterface } = useShowCurrentUserQuery();

    return (
        data._id ? 
        <>
            {!data._id ? <Navigate to={"/welcome"} replace /> : <Outlet />}
        </>
        :
        null
        // {!userLoggedIn ? <Navigate></Navigate>}
        // <Outlet>

        // </Outlet>
    )
}