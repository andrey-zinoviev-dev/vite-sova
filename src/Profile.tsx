import { useAppSelector } from "./hooks"
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import { UserInterface } from "./store/features/userSlice";

export default function Profile() {
    //RTK
    const { data = {} as UserInterface } = useShowCurrentUserQuery()
    
    return (
        <>
            <h1>С возвращением, {data.email}</h1>
        </>
    )
}