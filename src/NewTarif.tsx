import { useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import uuid from "react-uuid";
import { addTarif } from "./store/features/newCourseFeature";

import "./NewTarif.css"
import Label from "./Label";

export default function NewTarif() {
    //dispatch
    const dispatch = useAppDispatch();

    //state
    const [newTarif, setNewTarif] = useState<{
        title: string,
        end: string,
    }>({
        title: "",
        end: "",
    });

    //functions
    function addNewTarif() {
        const tarifId = uuid();

        dispatch(addTarif({tarif: newTarif, _id: tarifId}));
        setNewTarif({title: "", end: ""})
    };

    return (
        <div className="tarif-new">
            <div className="tarif-new__wrapper">
                <Label>
                    Название тарифа
                    <Input value={newTarif.title} onChange={(evt) => {
                        setNewTarif((prevValue) => {
                            return {...prevValue, title: evt.target.value};
                        })
                    }} placeholder="Тариф"></Input>
                </Label>
                <Label>
                    Конец доступа тарифа
                    <Input value={newTarif.end} onChange={(evt) => {
                        setNewTarif((prevValue) => {
                            return {...prevValue, end: evt.target.value};
                        })
                    }} id="tarifEnd" type="date">
                    </Input>
                </Label>
            </div>


            <button className="tarif-new__button-submit" onClick={(addNewTarif)} type="button">
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Добавить новый тариф</span>
            </button>
        </div>
    )
}