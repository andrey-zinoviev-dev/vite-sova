import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInterface } from "./userSlice";
export const sliceApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        loginUser: builder.mutation<UserInterface, {email: string, password: string}>({
            query: ({email, password}) => ({
                url: "/login",
                method: "POST",
                body: {email, password}
            }),
            transformResponse: (response: {data: UserInterface}) => response.data,
        }),
        registerUser: builder.mutation<UserInterface,  {email: string, password: string, name: string}>({
            query: ({email, password, name}) => ({
                url: "/register",
                method: "POST",
                body: {email, password, name}
            }),
            // transformResponse: (response: {user: UserInterface}) => response.user,
        })
    })
})

export const { useLoginUserMutation, useRegisterUserMutation } = sliceApi;