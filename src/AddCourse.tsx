import Wizard from "./Wizard";

import AddCourseBase from "./AddCourseBase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function AddCourse() {
    //state
    const [step, setStep] = useState<number>(0);

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => {
                navigate(-1);
            }}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Назад в профиль
            </button>
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