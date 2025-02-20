import { useState } from "react"

interface WizardInterface {
    children: React.ReactNode[],
}

export default function Wizard({children}: WizardInterface) {

    const [currentStep, setCurrentStep] = useState<number>(0);

    const childToRender = Array.from(children)[currentStep];

    return (
        <div>
            {childToRender}
            <span>{currentStep}</span>
            <button className="" disabled={currentStep === 0} onClick={() => {
                setCurrentStep((prevValue) => {
                    return prevValue - 1;
                })
            }}>Назад</button>
            <button className="" disabled={currentStep === children.length - 1} onClick={() => {
                setCurrentStep((prevValue) => {
                    return prevValue + 1;
                })
            }}>Далее</button>
        </div>
    )
}