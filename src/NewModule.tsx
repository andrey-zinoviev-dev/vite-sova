import { useState } from "react";
import { ModuleExtInterface } from "./intefaces/intefaces";
import Label from "./Label";
import Input from "./Input";
import { useAppDispatch } from "./hooks";
import { addModule } from "./store/features/newCourseFeature";

export default function NewModule() {
  //dispatch
  const dispatch = useAppDispatch();

  const [newModule, setNewModule] = useState<ModuleExtInterface>({
        title: "",
        lessons: [],
        description: "",
        _id: "",
        available: false,
  });

  return (
    <>
      <div>
        <Label>
          Название модуля
          <Input onChange={(evt) => {
            setNewModule((prevValue) => {
              return {...prevValue, title: evt.target.value};
            })
          }}></Input>
        </Label>
        <Label>
          Описание модуля
          <Input onChange={(evt) => {
            setNewModule((prevValue) => {
              return {...prevValue, description: evt.target.value}
            })
          }}></Input>
        </Label>
      </div>
      <button onClick={() => {
        dispatch(addModule(newModule));
        setNewModule({title: "", description: "", _id: "", available: false, lessons: []});
      }}>Добавить модуль</button>
    </>

  )
}