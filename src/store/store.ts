import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { sliceApi } from "./features/apiSlice";
import coursesReducer from "./features/coursesSlice";
import sideMenuReducer from "./features/sideMenuSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        courses: coursesReducer,
        sideMenu: sideMenuReducer,
        [sliceApi.reducerPath]: sliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sliceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch