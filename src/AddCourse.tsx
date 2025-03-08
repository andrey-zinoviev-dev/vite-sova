import Wizard from "./Wizard";

import AddCourseBase from "./AddCourseBase";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import AddCourseModules from "./AddCourseModules";
import AddCourseLessons from "./AddCourseLessons";

export default function AddCourse() {
    //state
    const [step, setStep] = useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        const unloadCallback = (event: BeforeUnloadEvent) => {
          event.preventDefault();
          return "";
        };
      
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
      }, []);

    return (
        <>
            <button onClick={() => {
                navigate(-1);
            }}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Назад в профиль
            </button>
            <h2>Добавление нового курса</h2>
            <Wizard currentStep={step}>
                <AddCourseBase handleNext={() => {
                    setStep((prevValue) => {
                        return prevValue + 1;
                    })
                }}></AddCourseBase>
                <AddCourseModules handleBack={() => {
                    setStep((prevValue) => {
                        return prevValue - 1;
                    })
                }} handleNext={() => {
                    setStep((prevValue) => {
                        return prevValue + 1;
                    })
                }}>

                </AddCourseModules>
                <AddCourseLessons handleBack={() => {
                    setStep((prevValue) => {
                        return prevValue - 1;
                    })
                }} handleNext={() => {
                    setStep((prevValue) => {
                        return prevValue + 1;
                    })
                }}></AddCourseLessons>
            </Wizard>
        </>

    )
}