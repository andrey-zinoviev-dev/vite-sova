import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sliceApi } from "./apiSlice";

export interface UserInterface {
    _id: string | null,
    email: string | null,
    courses: [],
    loggedIn: boolean,
}

const initialState:UserInterface = {
    _id: null,
    email: null,
    courses: [],
    loggedIn: localStorage.getItem("loggedIn") ? true : false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // login: (state, action: PayloadAction<UserInterface>) => {
        //     state._id = action.payload._id;
        //     state.loggedIn = action.payload.loggedIn;
        //     return state;
        // },
        // registerUser: (state, action: PayloadAction<UserInterface>) => {
        //     state._id = action.payload._id;
        //     state.loggedIn = action.payload.loggedIn;
        //     return state;
        // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            sliceApi.endpoints.loginUser.matchFulfilled, (state, action) => {
                // console.log(action);
                state.loggedIn = action.payload.loggedIn;
                localStorage.setItem("loggedIn", "true");
            }
        ),
        builder.addMatcher(
            sliceApi.endpoints.showCurrentUser.matchFulfilled, (state, action) => {
                state._id = action.payload._id;
                state.email = action.payload.email;
            },
        ),
        builder.addMatcher(
                sliceApi.endpoints.showCurrentUser.matchRejected, (state, action) => {
                if(action.payload?.status === 403) {
                    state.loggedIn = false;
                    localStorage.removeItem("loggedIn");
                }
                    // state._id = action.payload._id;
                // state.email = action.payload.email;
            },
        )
        // builder.addMatcher(
        //     sliceApi.endpoints.showCurrentUser.matchRejected, (state, action) => {
        //         console.log(action);
        //         // state._id = action.payload._id;
        //         // state.email = action.payload.email;
        //     },
        // ),
    }
});

// export const { login, registerUser } = userSlice.actions;

export const userLoggedIn = (state: RootState) => state.user;

export default userSlice.reducer