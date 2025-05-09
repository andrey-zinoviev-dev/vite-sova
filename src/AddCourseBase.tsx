import Input from "./Input";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addBaseInfo } from "./store/features/newCourseFeature";
import TableComp from "./TableComp";
// import NewTarif from "./NewTarif"
// import TableButton from "./TableButton"
import TableElement from "./TableElement";
// import TableButton from "./TableButton"
// import Form from "./Form"
import "./AddCourseBase.css";
import Label from "./Label";
import Textarea from "./Textarea";
import TarifData from "./TarifData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import ActionButton from "./ActionButton";
// import PopupRight from "./PopupRight";
import NewTarif from "./NewTarif";
// import { useState } from "react";

interface TestInterface {
  headline: string;
}

export default function AddCourseBase({ headline }: TestInterface) {
  //redux
  const newCourseState = useAppSelector((state) => {
    return state.newCourse;
  });

  // const startDate = new Date(newCourseState.startDate);
  // console.log(startDate);
  // console.log(newCourseState);
  //dispatch
  const dispatch = useAppDispatch();

  //state
  // const [popupOpened, setPopupOpened] = useState<boolean>(false);

  //functions
  function handleInputChange(
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    dispatch(addBaseInfo({ key: evt.target.name, value: evt.target.value }));
  }

  // function deleteTarif(tarifId: string) {
  //     dispatch(removeTarif(tarifId))
  // }

  return (
    <>
      <h2>{headline}</h2>
      <Label>
        Как называется новый курс?
        <Input
          defaultValue={newCourseState.title ? newCourseState.title : ""}
          name="title"
          onChange={handleInputChange}
          placeholder="Название курса"
        ></Input>
      </Label>
      <Label>
        О чем будет новый курс?
        <Textarea
          name="description"
          defaultValue={newCourseState.description}
          onChange={handleInputChange}
          placeholder="Описание курса"
        ></Textarea>
        {/* <Input defaultValue={newCourseState.description} name="description" onChange={handleInputChange} placeholder="Описание курса"></Input> */}
      </Label>
      <Label>
        Начало курса
        <Input
          defaultValue={newCourseState.startDate}
          id="accessStart"
          name="startDate"
          onChange={handleInputChange}
          type="date"
          placeholder="Дата начала курса"
        ></Input>
      </Label>
      <NewTarif></NewTarif>

      <div className="newItem__wrapper">
        {/* <span>Тарифы</span> */}
        <p>Тарифы</p>

        {/* <ActionButton onClick={() => {
            setPopupOpened(true);
          }}>
            <FontAwesomeIcon icon={faPlus} />
            Добавить тариф
          </ActionButton> */}
        {newCourseState.tarifs.length > 0 && (
          <TableComp
            items={newCourseState.tarifs}
            renderItem={(tarif) => {
              return (
                <TableElement>
                  <TarifData
                    item={tarif}
                    tarifStart={newCourseState.startDate}
                    removeTarif={() => {
                      console.log("remove tarif");
                    }}
                  ></TarifData>
                </TableElement>
              );
            }}
          ></TableComp>
        )}
      </div>
      {/* {popupOpened && <PopupRight closePopup={() => {
            setPopupOpened(false);
        }}>
            <NewTarif></NewTarif>
        </PopupRight>} */}
    </>
  );
}
