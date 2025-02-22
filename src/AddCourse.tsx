import { useState } from "react";
import AddCourseStep from "./AddCourseStep";
import Input from "./Input";
import Wizard from "./Wizard";

export default function AddCourse() {
    const [step, setStep] = useState<number>(0);

    return (
        <>
            <Wizard step={step}>
                <AddCourseStep>
                    <h2>Основные данные нового курса</h2>
                    <Input updateValue={() => {}} placeholder="Название курса"></Input>
                    <Input updateValue={() => {}} placeholder="Описание курса"></Input>
                </AddCourseStep>
                <h1>Второй этап нового курса</h1>
                <h1>Третий этап нового курса</h1>
            </Wizard>
        </>

    )
}