import { Navigate, Outlet } from "react-router";

import { UserInterface } from "./store/features/userSlice";
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
// interface ProtectedRouteInterface {

// }

export default function ProtectedRoute() {
    const {data = {} as UserInterface, isError, isLoading, isSuccess} = useShowCurrentUserQuery();

    if(isSuccess) {
        return <>
            <Outlet></Outlet>
        </>
    }

    if(isLoading) {
        return <p>...loading</p>
    }

    if(isError || !data._id) {
        return <Navigate to={"/"} replace />
    }
}