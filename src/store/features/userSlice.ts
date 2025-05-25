import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { sliceApi } from "./apiSlice";
import { TarifInterface } from "../../intefaces/intefaces";

export interface UserInterface {
    _id: string | null,
    email: string | null,
    // courses: {course: StudentCourseInterface, tarif: string}[],
    loggedIn: boolean,
    accessToken: string | null,
    name: string,
    tarifs: TarifInterface[],
    roles: string[],
}

const initialState:UserInterface = {
    _id: null,
    email: null,
    tarifs: [],
    loggedIn: false,
    accessToken: null,
    name: "",
    roles: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInterface>) => {
            state._id = action.payload._id;
            state.loggedIn = true;
            // return state;
        },

        // registerUser: (state, action: PayloadAction<UserInterface>) => {
        //     state._id = action.payload._id;
        //     state.loggedIn = action.payload.loggedIn;
        //     return state;
        // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            sliceApi.endpoints.loginUser.matchFulfilled, (state, action) => {
                state.loggedIn = action.payload.loggedIn;
            },
        );
        builder.addMatcher(
            sliceApi.endpoints.showCurrentUser.matchFulfilled, (state, action) => {
                state.loggedIn = true;
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.tarifs = action.payload.tarifs;
                state.roles = action.payload.roles;
            },
        )
    }
});

export const { login } = userSlice.actions;

export const userLoggedIn = (state: RootState) => state.user;

export default userSlice.reducer