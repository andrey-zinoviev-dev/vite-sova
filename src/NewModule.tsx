import { useState } from "react";
import { ModuleExtInterface } from "./intefaces/intefaces";
import Label from "./Label";
import Input from "./Input";
import { useAppDispatch } from "./hooks";
import { addModule } from "./store/features/newCourseFeature";
import uuid from "react-uuid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import TableElement from "./TableElement";
import ActionButton from "./ActionButton";
import "./NewModule.css"

export default function NewModule() {
  //dispatch
  const dispatch = useAppDispatch();

  // const [newModule, setNewModule] = useState<ModuleExtInterface>({
  //       title: "",
  //       lessons: [],
  //       description: "",
  //       _id: "",
  //       available: false,
  //       // course: {},
  // });

  //functions
  function handleAddModule() {
    // const moduleId = uuid();
    // const moduleObj = {...newModule, _id: moduleId} as ModuleExtInterface;
    // dispatch(addModule(moduleObj));
    // setNewModule({title: "", lessons: [], description: "", _id: "", available: false});
  }

  return (
    <>
    </>
    // <div className="module-wrapper">
    //   <Label>
    //     Название модуля
    //     <Input
    //       placeholder="Например, вводный модуль"
    //       onChange={(evt) => {
    //         setNewModule((prevValue) => {
    //           return { ...prevValue, title: evt.target.value };
    //         });
    //       }}
    //     ></Input>
    //   </Label>
    //   <Label>
    //     Описание модуля
    //     <Input
    //       placeholder="О чем этот модуль"
    //       onChange={(evt) => {
    //         setNewModule((prevValue) => {
    //           return { ...prevValue, description: evt.target.value };
    //         });
    //       }}
    //     ></Input>
    //   </Label>
    //   <ActionButton onClick={handleAddModule}>Добавить модуль</ActionButton>

    // </div>
  );
}