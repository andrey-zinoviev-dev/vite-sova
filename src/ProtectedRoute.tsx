import { Navigate, Outlet } from "react-router";
import { useShowCurrentUserQuery } from './store/features/apiSlice'
import { UserInterface } from "./store/features/userSlice";
import { useAppSelector } from "./hooks";
// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    //dispatch
    // const dispatch = useDispatch();
    const user = useAppSelector((state) => {
        return state.user;
    })
    console.log(user);
    return (

        <>
            {/* <h1>Защита маршрутов</h1> */}
            <Outlet></Outlet>
            {/* {!user._id ? <Navigate to={"/"} /> : <Outlet />} */}
        </>
        // {!userLoggedIn ? <Navigate></Navigate>}
        // <Outlet>

        // </Outlet>
    )
}