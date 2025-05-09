import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LessonInterface, ModuleExtInterface, TarifInterface } from "../../intefaces/intefaces";

import { NewCourseType } from "../../intefaces/intefaces";

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
        addTarif: (state, action: PayloadAction<TarifInterface>) => {
            state.tarifs = [...state.tarifs, action.payload]
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
                return module._id !== action.payload;
            });
            return state;
        },
        addLesson: (state, action: PayloadAction<{moduleId: string, lesson: LessonInterface}>) => {
            state.modules = state.modules.map((module) => {
                return module._id === action.payload.moduleId? {...module, lessons: [...module.lessons, action.payload.lesson]} : module
            });
            return state;
        },
        removeLesson: (state, action: PayloadAction<{moduleId: string, lessonTitle: string}>) => {
            state.modules = state.modules.map((module) => {
                return module._id === action.payload.moduleId ? {...module, lessons: module.lessons.filter((lesson) => {
                    return lesson.title !== action.payload.lessonTitle;
                })} : module;
            });
            return state;
        },
    },
});

export const { addBaseInfo, addTarif, removeTarif, addModule, removeModule, addLesson, removeLesson } = newCourse.actions;

export default newCourse.reducer;