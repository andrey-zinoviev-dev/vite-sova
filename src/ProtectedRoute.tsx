import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "./hooks";

// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    //redux
    const userLoggedIn = useAppSelector((state) => {
        return state.user.loggedIn;
    });
    console.log(userLoggedIn);

    return (
        <>
            {!userLoggedIn ? <Navigate to={"welcome"} /> : <Outlet />}
        </>
        // {!userLoggedIn ? <Navigate></Navigate>}
        // <Outlet>

        // </Outlet>
    )
}