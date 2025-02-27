import { useState } from "react"
import "./Wizard.css"

interface WizardInterface {
    children: React.ReactNode[],
    currentStep: number,
    // step: number,
}

export default function Wizard({ children, currentStep }: WizardInterface) {

    // const [currentStep, setCurrentStep] = useState<number>(0);

    const childToRender = Array.from(children)[currentStep];

    return (
        <div className="wizard">
            <ul className="wizard-progress">
                {children.map((child, index) => {
                    return <li key={index}>
                        <span className={currentStep === index ? "wizard-progress__span_active wizard-progress__span" : currentStep > index ? "wizard-progress__span_completed wizard-progress__span" : "wizard-progress__span"}>{index + 1}</span>
                        <div className={currentStep === index ? "wizard-progress__dash_active wizard-progress__dash" : currentStep > index ? "wizard-progress__dash_completed wizard-progress__dash" : "wizard-progress__dash"}></div>
                    </li>
                })}
            </ul>
            {childToRender}
            {/* <span>{currentStep}</span> */}
            {/* <button className="" disabled={currentStep === 0} onClick={() => {
                setCurrentStep((prevValue) => {
                    return prevValue - 1;
                })
            }}>Назад</button>
            <button className="" disabled={currentStep === children.length - 1} onClick={() => {
                setCurrentStep((prevValue) => {
                    return prevValue + 1;
                })
            }}>Далее</button> */}
        </div>
    )
}