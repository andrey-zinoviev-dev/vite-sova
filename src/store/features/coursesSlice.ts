import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseInterface } from "./courseSlice";
// import { sliceApi } from "./apiSlice";

export interface CoursesInterface {
    courses: CourseInterface[]
}

const initialState:CoursesInterface = {
    courses: [],
};

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<CourseInterface[]>) => {
            state.courses = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     // builder.addMatcher(sliceApi.endpoints.)
    // }
});

export const {setCourses} = coursesSlice.actions;

export default coursesSlice.reducer;