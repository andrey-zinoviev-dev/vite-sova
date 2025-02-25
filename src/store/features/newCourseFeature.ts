import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseInterface } from "./courseSlice";

type NewCourseType = Omit<CourseInterface, "_id"> & {
    startDate: string,
};

type NewCourseTextType = Pick<NewCourseType, "title" | "description" | "startDate"> 

const initialState: NewCourseType = {
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
            key: string,
            value: string,
        }>) => {
            const paramToUpdate = action.payload.key as keyof NewCourseTextType;

            state[paramToUpdate] = action.payload.value;

            return state;
        },
        addTarif: (state, action: PayloadAction<{
            tarif: { 
                title: string,
                end: string,
            },
            _id: string,
        }>) => {
            state.tarifs = [...state.tarifs, {title: action.payload.tarif.title, end: action.payload.tarif.end, _id: action.payload._id}]
        },
        removeTarif: (state, action: PayloadAction<string>) => {
            state.tarifs = state.tarifs.filter((tarif) => {
                return tarif._id !== action.payload;
            });
        }
    },
});

export const { addBaseInfo, addTarif, removeTarif } = newCourse.actions;

export default newCourse.reducer;