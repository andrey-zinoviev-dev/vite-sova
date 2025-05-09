import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditWrapper from "./EditWrapper";
import { TarifInterface } from "./intefaces/intefaces";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { removeTarif } from "./store/features/newCourseFeature";
// import { useAppDispatch } from "./hooks";
import ActionButton from "./ActionButton";
import "./TarifData.css";
import PopupRight from "./PopupRight";
import { useState } from "react";
// import EditTarif from "./EditTarif";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
interface TarifDataInterface {
  item: TarifInterface,
  tarifStart: string,
  removeTarif: () => void,
}

export default function TarifData({ item, tarifStart, removeTarif }: TarifDataInterface) {
  //dispatch
  // const dispatch = useAppDispatch();

  const [popupOpened, setPopupOpened] = useState<boolean>(false);
  // const [tarifToEdit, setTarifToEdit] = useState<TarifInterface | null>(null);

  //dates
  const startNormalized = new Date(tarifStart).toISOString();
  const endnormalized = new Date(item.expire).toISOString();

  //functions
  function getFinalDate(date: string){
    const dateToFormat = new Date(date);
    return `${dateToFormat.getDate().toString().padStart(2, '0')}.${(dateToFormat.getMonth() + 1).toString().padStart(2, '0')}.${dateToFormat.getFullYear()}`;
  }

  return (
    <>
      <EditWrapper>
        <h3>{item.title}</h3>
        <ActionButton onClick={removeTarif}>
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
      </EditWrapper>
      <div className="tarif-start-end-wrapper">
        <span>{getFinalDate(startNormalized)} - {getFinalDate(endnormalized)}</span>
      </div>
      <ActionButton onClick={() => {
        setPopupOpened(true);
      }}>
        Изменить тариф
      </ActionButton>
      {popupOpened && <PopupRight closePopup={() => {
        setPopupOpened(false);
      }}>
        <Form className="edit-tarif-form">
          <h3>Изменение тарифа</h3>
          <Label>Название
            <Input defaultValue={item.title}></Input>
          </Label>
          <Label>Конец
            <Input defaultValue={item.expire}></Input>
          </Label>
          {/* <span>Начало</span> */}
          {/* <Input></Input> */}
        </Form>
      </PopupRight>}
    </>
  )
}