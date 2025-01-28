import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInterface } from "./userSlice";
export const sliceApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        loginUser: builder.mutation<{ loggedIn: boolean }, {email: string, password: string}>({
            query: ({email, password}) => ({
                url: "/login",
                method: "POST",
                body: {email, password},
                credentials: "include",
            }),
            // transformResponse: (response: {data: UserInterface}) => response.data,
        }),
        registerUser: builder.mutation<UserInterface,  {email: string, password: string, name: string}>({
            query: ({email, password, name}) => ({
                url: "/register",
                method: "POST",
                body: {email, password, name},
                credentials: 'include',
            }),
            // transformResponse: (response: {user: UserInterface}) => response.user,
        }),
        showCurrentUser: builder.query<UserInterface, boolean>({
            query: () => ({
                url: "/currentUser",
                credentials: "include",
            })
        }),
    })
})

export const { useLoginUserMutation, useRegisterUserMutation, useShowCurrentUserQuery } = sliceApi;