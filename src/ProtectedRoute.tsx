import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "./hooks";
// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
        user._id ? 
        <>
            {!user._id ? <Navigate to={"/"} /> : <Outlet />}
        </>
        :
        null
        // {!userLoggedIn ? <Navigate></Navigate>}
        // <Outlet>

        // </Outlet>
    )
}