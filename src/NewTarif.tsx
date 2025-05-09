import { useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import uuid from "react-uuid";
import { addTarif } from "./store/features/newCourseFeature";

import "./NewTarif.css"
import Label from "./Label";
import { TarifInterface } from "./intefaces/intefaces";
import ActionButton from "./ActionButton";
import TableElement from "./TableElement";

export default function NewTarif() {
    //dispatch
    const dispatch = useAppDispatch();

    //state
    const [newTarif, setNewTarif] = useState<TarifInterface>({
        title: "",
        expire: "",
        _id: "",
    });

    //functions
    function addNewTarif() {
        const tarifId = uuid();
        const tarifObj = {...newTarif, _id: tarifId} as TarifInterface; 
        dispatch(addTarif(tarifObj));
        setNewTarif({title: "", expire: "", _id: ""})
    };

    return (
      <>
        <div className="tarif-new__wrapper">
          <Label>
            Название тарифа
            <Input
              value={newTarif.title}
              onChange={(evt) => {
                setNewTarif((prevValue) => {
                  return { ...prevValue, title: evt.target.value };
                });
              }}
              placeholder="Тариф"
            ></Input>
          </Label>
          <Label>
            Конец доступа тарифа
            <Input
              value={newTarif.expire}
              onChange={(evt) => {
                setNewTarif((prevValue) => {
                  return { ...prevValue, expire: evt.target.value };
                });
              }}
              id="tarifEnd"
              type="date"
            ></Input>
          </Label>
          <ActionButton onClick={addNewTarif}>Добавить тариф</ActionButton>
        </div>
      </>
    );
}