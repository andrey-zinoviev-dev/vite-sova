import Wizard from "./Wizard";

import AddCourseBase from "./AddCourseBase";
import { useState } from "react";

export default function AddCourse() {
    //state
    const [step, setStep] = useState<number>(0);

    return (
        <>
            <h1>Добавление нового курса</h1>
            <Wizard currentStep={step}>
                <AddCourseBase handleNext={() => {
                    setStep((prevValue) => {
                        return prevValue + 1;
                    })
                }}></AddCourseBase>
                <>
                    <h1>Второй этап нового курса</h1>
                    <button onClick={() => {
                        setStep((prevValue) => {
                            return prevValue - 1;
                        })
                    }}>Назад</button>
                    <button onClick={() => {
                        setStep((prevValue) => {
                            return prevValue + 1;
                        })
                    }}>Далее</button>
                </>
                <h1>Третий этап нового курса</h1>
            </Wizard>
        </>

    )
}