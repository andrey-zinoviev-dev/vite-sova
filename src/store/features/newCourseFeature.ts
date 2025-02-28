import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseInterface, ModuleExtInterface } from "../../intefaces/intefaces";

type NewCourseType = Omit<CourseInterface, "_id">

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
        addTarif: (state, action: PayloadAction<{tarif: { 
            title: string,
            end: string,
        }, _id: string}>) => {
            state.tarifs = [...state.tarifs, {...action.payload.tarif, _id: action.payload._id}]
        },
        removeTarif: (state, action: PayloadAction<string>) => {
            state.tarifs = state.tarifs.filter((tarif) => {
                return tarif._id !== action.payload;
            });
        },
        addModule: (state, action: PayloadAction<ModuleExtInterface>) => {
            state.modules = [...state.modules, action.payload];
            return state;
        },
        removeModule: (state, action: PayloadAction<string>) => {
            state.modules = state.modules.filter((module) => {
                return module.title !== action.payload;
            });
            return state;
        }
    },
});

export const { addBaseInfo, addTarif, removeTarif, addModule, removeModule } = newCourse.actions;

export default newCourse.reducer;