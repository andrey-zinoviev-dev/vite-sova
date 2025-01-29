import { createSlice } from "@reduxjs/toolkit";
import { CourseInterface } from "./courseSlice";
import { sliceApi } from "./apiSlice";

export interface CoursesInterface {
    courses: CourseInterface[]
}

const initialState:CoursesInterface = {
    courses: [],
};

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addMatcher(sliceApi.endpoints.)
    }
})