import { ReactElement, useState } from "react";
import "./Wizard.css";
import ActionButton from "./ActionButton";
import { useAppSelector } from "./hooks";
import { NewCourseType } from "./intefaces/intefaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BackButton from "./BackButton";

interface WizardInterface {
  children: React.ReactNode[];
  onSubmit: (courseData: NewCourseType) => void;
  // currentStep: number,
  // step: number,
}

export default function Wizard({ children, onSubmit }: WizardInterface) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const childToRender = Array.from(children)[currentStep];

  //redux
  const newCourseState = useAppSelector((state) => {
    return state.newCourse;
  });

  return (
    <div className="wizard">
      <BackButton href='/profile' text="Назад в профиль" />
      <h2>Новый курс</h2>
      {/* <h2>{childToRender}</h2> */}
      <div>
        <ul className="wizard-progress">
          {children.map((child, index) => {
            const el = child as ReactElement;
            const stepHeadline = el.props.headline as string;
            //   console.log(el.props);
            return (
              <li
                key={index}
                className={
                  currentStep === index
                    ? "li_active"
                    : currentStep > index
                    ? "li_completed"
                    : ""
                }
              >
                <span className="wizard-progress__span">{index + 1}</span>
                <span> {stepHeadline} </span>
                <FontAwesomeIcon icon={faChevronRight} />
                {/* <div
                className={
                  currentStep === index
                    ? "wizard-progress__dash_active wizard-progress__dash"
                    : currentStep > index
                    ? "wizard-progress__dash_completed wizard-progress__dash"
                    : "wizard-progress__dash"
                }
              ></div> */}
              </li>
            );
          })}
        </ul>
      </div>

      {childToRender}
      {/* <span>{currentStep}</span> */}
      <div className="wizard__navigation">
        <button
          className={currentStep === 0 ? "wizard__btn_hidden" : ""}
          disabled={currentStep === 0}
          onClick={() => {
            setCurrentStep((prevValue) => {
              return prevValue - 1;
            });
          }}
        >
          Назад
        </button>
        <ActionButton
          disabled={currentStep > children.length - 1}
          onClick={() => {
            if (currentStep === children.length - 1) {
              onSubmit(newCourseState);
            } else {
              setCurrentStep((prevValue) => {
                return prevValue + 1;
              });
            }
          }}
        >
          {currentStep === children.length - 1 ? "Отправить" : "Далее"}
        </ActionButton>
      </div>
    </div>
  );
}
