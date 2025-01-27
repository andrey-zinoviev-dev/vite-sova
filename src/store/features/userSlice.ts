import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface UserInterface {
    _id: string | null,
    loggedIn: boolean,
}

const initialState:UserInterface = {
    _id: null,
    loggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInterface>) => {
            state._id = action.payload._id;
            state.loggedIn = action.payload.loggedIn;
            return state;
        }
    },
});

export const { login } = userSlice.actions;

// export const userLoggedIn = (state: RootState) => state.user.loggedIn

export default userSlice.reducer