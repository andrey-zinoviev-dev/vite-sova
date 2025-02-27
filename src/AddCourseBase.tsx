import { useEffect } from "react"
import Input from "./Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "./hooks"
import { addBaseInfo, removeTarif } from "./store/features/newCourseFeature"
import TableComp from "./TableComp"
import NewTarif from "./NewTarif"
// import TableButton from "./TableButton"
import TableElement from "./TableElement"
// import TableButton from "./TableButton"
// import Form from "./Form"
import "./AddCourseBase.css";
import Label from "./Label"
import Textarea from "./Textarea"

interface AddCourseBaseInterface {
    handleNext: () => void,
}

export default function AddCourseBase({ handleNext }: AddCourseBaseInterface) {
    //redux
    const newCourseState = useAppSelector((state) => {
        return state.newCourse;
    });

    const startDate = new Date(newCourseState.startDate);
    // console.log(startDate);
    // console.log(newCourseState);
    //dispatch
    const dispatch = useAppDispatch();


    
    //functions
    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        dispatch(addBaseInfo({key: evt.target.name, value: evt.target.value}))
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
        <div className="addStep">
            <h2>Основные данные нового курса</h2>
            <Label>
                Как называется новый курс?
                <Input defaultValue={newCourseState.title ? newCourseState.title : ""} name="title" onChange={handleInputChange} placeholder="Название курса"></Input>
            </Label>
            <Label>
                О чем будет новый курс?
                <Textarea name="description" defaultValue={newCourseState.description} onChange={handleInputChange} placeholder="Описание курса"></Textarea>
                {/* <Input defaultValue={newCourseState.description} name="description" onChange={handleInputChange} placeholder="Описание курса"></Input> */}
            </Label>
            <Label>
                Начало курса
                <Input defaultValue={newCourseState.startDate} id="accessStart" name="startDate" onChange={handleInputChange} type="date" placeholder="Дата начала курса"></Input>
            </Label>
            <NewTarif></NewTarif>
            {newCourseState.tarifs.length > 0 && <TableComp items={newCourseState.tarifs} renderItem={(tarif) => {
                return <TableElement>
                    <div>
                        <div>
                            <span>{tarif.title}</span>
                            <button onClick={() => { deleteTarif(tarif._id) }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                        <span>{startDate.toLocaleDateString()} - {new Date(tarif.end).toLocaleDateString()}</span>
                    </div>
                </TableElement>
            }}></TableComp>}
            <button onClick={handleNext}>Далее</button>
        </div>
    )
}