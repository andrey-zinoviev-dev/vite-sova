import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks"
// import PopupRight from "./PopupRight";
import Label from "./Label";
import Input from "./Input";
import { ModuleExtInterface } from "./intefaces/intefaces";
import { addModule, removeModule } from "./store/features/newCourseFeature";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import ActionButton from "./ActionButton";

export default function AddCourseModules() {
    const newModules = useAppSelector((state) => {
        return state.newCourse.modules;
    });
    // console.log(newModules);

    //state
    // const [popupSideOpened, setPopupSideOpened] = useState<boolean>(false);

    const [newModule, setNewModule] = useState<ModuleExtInterface>({
        title: "",
        lessons: [],
        description: "",
        _id: "",
        available: false,
    });

    const dispatch = useAppDispatch();

    return (
        <>
            <h2>Модули курса</h2>
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
                // setPopupSideOpened(false);
            }}>Добавить модуль</button>
            
            {newModules.length > 0 && 
            <TableComp items={newModules} renderItem={(item) => {
                return <TableElement>
                    <>
                        <EditWrapper>
                            <h3>{item.title}</h3>
                            <ActionButton onClick={() => {
                                // console.log(item);
                                dispatch(removeModule(item.title));
                            }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </ActionButton>
                        </EditWrapper>

                        <p>{item.description}</p>
                        <span>Уроки: {item.lessons.length}</span>
                    </>
                </TableElement>
            }}></TableComp>
            // <ul>
            //     {newModules.map((module) => {
            //         return <li key={module.title}>
            //             <span>{module.title}</span>
            //         </li>
            //     })}    
            // </ul>
            }
            
            <button>Назад</button>
            <button>Вперед</button>

            {/* {popupSideOpened && <PopupRight closePopup={() => {
                setPopupSideOpened(false);
            }}>
                <h3>Окно добавления нового модуля</h3>
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
                <span>Уроки будут добалены в следующем этапе</span>
                <button onClick={() => {
                    dispatch(addModule(newModule));
                    setNewModule({title: "", description: "", _id: "", available: false, lessons: []});
                    setPopupSideOpened(false);
                }}>Добавить модуль</button>
            </PopupRight>} */}
        </>
    )
}