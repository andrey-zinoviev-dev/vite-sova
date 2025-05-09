import { useContext, useState } from "react";
import ActionButton from "./ActionButton";
import Input from "./Input";
import Label from "./Label";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addLesson } from "./store/features/newCourseFeature";
import { LessonInterface } from "./intefaces/intefaces";
import { CourseFilesContext } from "./contexts/courseFilesContext";

import uuid from "react-uuid";

import "./NewLesson.css";
import TipTap from "./Tiptap";

interface NewLessonInterface {
    closePopup: () => void,
    moduleId: string,
}

export default function NewLesson({ moduleId, closePopup }: NewLessonInterface) {
    //state
    const [newLesson, setNewLesson] = useState<LessonInterface>({ title: "", _id: "", available: false, completed: false});

    //dispatch
    const dispatch = useAppDispatch();

    // //context
    const { files } = useContext(CourseFilesContext);

    // updateFunction()
    //functions
    function handleAddLesson() {
        // console.log(files);

        const lessonId = uuid();
        const lessonObj = {...newLesson, _id: lessonId} as LessonInterface;
        dispatch(addLesson({moduleId: moduleId, lesson: lessonObj}));
        closePopup();
    }

    return (
        <div className="new-lesson">
            <Label>
                Название урока
                <Input onChange={(evt) => {
                    setNewLesson((prevValue) => {
                        return {...prevValue, title: evt.target.value}
                    })
                }} placeholder="Например, гортанные структуры"></Input>
            </Label>
            <div className="label">
                <span>Контент урока</span>
                <TipTap />

            </div>
            <ActionButton onClick={handleAddLesson} type="button">
                Добавить
            </ActionButton>
        </div>
    )
}