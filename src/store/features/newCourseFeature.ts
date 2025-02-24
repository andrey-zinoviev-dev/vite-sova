import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseInterface } from "./courseSlice";

type NewCourseType = Omit<CourseInterface, "_id"> & {
    tarifs: string[],
    startDate: string,
};

const initialState:NewCourseType = {
    title: "",
    description: "",
    author: {
        name: ""
    },
    available: false,
    modules: [],
    students: [],
    tarifs: [],
    startDate: "",
};

const newCourse = createSlice({
    name: "newCourse",
    initialState,
    reducers: {
        addBaseInfo: (state, action: PayloadAction<{
            title: string,
            description: string,
        }>) => {
            state.title = action.payload.title;
            state.description = action.payload.description
        }
    },
});

export const { addBaseInfo } = newCourse.actions;

export default newCourse.reducer;