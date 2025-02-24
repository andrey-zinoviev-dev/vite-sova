import { useState } from "react"
import Input from "./Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "./hooks"
// import Form from "./Form"

export default function AddCourseBase() {
    // const [baseCourseInfo, setBaseCourseInfo] = useState<{

    // }>()
    //redux
    const newCourseState = useAppSelector((state) => {
        return state.newCourse;
    });
    //dispatch
    const dispatch = useAppDispatch();

    return (
        <div>
                        <h2>Основные данные нового курса</h2>
                            <Input onChange={(evt) => {
                                
                            }} placeholder="Название курса"></Input>
                            <Input placeholder="Описание курса"></Input>
                            <label htmlFor="accessStart">Начало курса</label>
                            <Input id="accessStart" type="date" placeholder="Дата начала курса"></Input>
                            <div>
                                <Input onChange={() => {
                                   
                                }} placeholder="Тариф"></Input>
                                <button type="button">
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </button>
                            </div>
                            <ul>
                                {/* {tarifs.map((tarif) => {
                                    return <li key={tarif.title}>
                                        <span>{tarif.title}</span>
                                        <span>от {tarif.starts}</span>
                                        <span>до {tarif.ends}</span>
                                    </li>
                                })} */}
                            </ul>
                        </div>
    )
}