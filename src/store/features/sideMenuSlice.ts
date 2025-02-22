import { createSlice } from "@reduxjs/toolkit";

interface SideMenuInterface {
    opened: boolean,
};

const initialState:SideMenuInterface = {
    opened: false,
};

const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.opened = !state.opened;
        }
    }
});

export const { toggleMenu } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;