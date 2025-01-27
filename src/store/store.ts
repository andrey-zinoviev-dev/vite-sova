import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { sliceApi } from "./features/apiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [sliceApi.reducerPath]: sliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sliceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch