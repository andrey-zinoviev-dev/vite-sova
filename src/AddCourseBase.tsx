import { useState, useEffect } from "react"
import Input from "./Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "./hooks"
import { addBaseInfo, addTarif, removeTarif } from "./store/features/newCourseFeature"
import uuid from "react-uuid"
import TableComp from "./TableComp"
// import TableButton from "./TableButton"
// import Form from "./Form"

export default function AddCourseBase() {
    // const [baseCourseInfo, setBaseCourseInfo] = useState<{

    // }>()
    //redux
    const newCourseState = useAppSelector((state) => {
        return state.newCourse;
    });
    // console.log(newCourseState);
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
    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        dispatch(addBaseInfo({key: evt.target.name, value: evt.target.value}))
    };

    function addNewTarif() {
        const tarifId = uuid();
        dispatch(addTarif({tarif: newTarif, _id: tarifId}));
        setNewTarif({title: "", end: ""})
    };

    function deleteTarif(tarifId: string) {
        dispatch(removeTarif(tarifId))
    }

    useEffect(() => {
        const unloadCallback = (event: BeforeUnloadEvent) => {
          event.preventDefault();
          return "";
        };
      
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
      }, []);

    return (
        <div>
            <h2>Основные данные нового курса</h2>
            <Input defaultValue={newCourseState.title ? newCourseState.title : ""} name="title" onChange={handleInputChange} placeholder="Название курса"></Input>
            <Input defaultValue={newCourseState.description} name="description" onChange={handleInputChange} placeholder="Описание курса"></Input>
            <label htmlFor="accessStart">Начало курса</label>
            <Input defaultValue={newCourseState.startDate} id="accessStart" name="startDate" onChange={handleInputChange} type="date" placeholder="Дата начала курса"></Input>
            <div>
                <Input value={newTarif.title} onChange={(evt) => {
                    setNewTarif((prevValue) => {
                        return {...prevValue, title: evt.target.value};
                    })
                }} placeholder="Тариф"></Input>
                <label htmlFor="tarifEnd">
                    Конец доступа тарифа
                </label>
                <Input value={newTarif.end} onChange={(evt) => {
                    setNewTarif((prevValue) => {
                        return {...prevValue, end: evt.target.value};
                    })
                }} id="tarifEnd" type="date">
                </Input>
                <button onClick={(addNewTarif)} type="button">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </div>
            <TableComp items={newCourseState.tarifs} renderItem={(tarif) => {
                return <>
                    <span>{tarif.title}</span>
                        <span>доступ заканчивается {tarif.end}</span>
                        <button onClick={() => { deleteTarif(tarif._id) }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                </>
            }}></TableComp>
        </div>
    )
}