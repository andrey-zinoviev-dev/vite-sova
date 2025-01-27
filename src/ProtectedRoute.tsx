import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "./hooks";

// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    //redux
    const userLoggedIn = useAppSelector((state) => {
        return state.user.loggedIn;
    });

    return (
        <>
            {!userLoggedIn ? <Navigate to={"welcome"} /> : <Outlet />}
        </>
        // {!userLoggedIn ? <Navigate></Navigate>}
        // <Outlet>

        // </Outlet>
    )
}