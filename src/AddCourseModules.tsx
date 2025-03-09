import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks"
// import PopupRight from "./PopupRight";
import Label from "./Label";
import Input from "./Input";
import { removeModule } from "./store/features/newCourseFeature";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import ActionButton from "./ActionButton";
import PopupRight from "./PopupRight";
import NewModule from "./NewModule";

export default function AddCourseModules() {
    const newModules = useAppSelector((state) => {
        return state.newCourse.modules;
    });

    //state
    const [popupSideOpened, setPopupSideOpened] = useState<boolean>(false);



    const dispatch = useAppDispatch();

    return (
        <>
            <h2>Модули курса</h2>

            <NewModule></NewModule>
            
            {newModules.length > 0 && 
            <TableComp items={newModules} renderItem={(item) => {
                return <TableElement>
                    <>
                        <EditWrapper>
                            <h3>{item.title}</h3>
                            <ActionButton onClick={() => {
                                dispatch(removeModule(item.title));
                            }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </ActionButton>
                        </EditWrapper>

                        <p>{item.description}</p>
                        <span>Уроки: {item.lessons.length}</span>
                        <ActionButton onClick={() => {
                            setPopupSideOpened(true);
                        }}>
                            добавить урок
                        </ActionButton>
                    </>
                </TableElement>
            }}></TableComp>}
           
            {popupSideOpened && <PopupRight closePopup={() => {
                setPopupSideOpened(false)
            }}>
                <h3>Новый урок</h3>
                <div>
                    <Label>
                        Название урока
                        <Input placeholder="Название урока"></Input>
                    </Label>
                    <p>вот тут компонент контента урока будет</p>

                </div>
            </PopupRight>}
        </>
    )
}