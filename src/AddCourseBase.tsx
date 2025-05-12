import Input from "./Input";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  addBaseInfo,
  addTarif,
  removeTarif,
} from "./store/features/newCourseFeature";
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
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import PopupRight from "./PopupRight";
import Form from "./Form";
import { NewTarifType } from "./intefaces/intefaces";
import EditWrapper from "./EditWrapper";

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
  const [popupOpened, setPopupOpened] = useState<boolean>(false);
  const [newTarif, setNewTarif] = useState<NewTarifType>({
    title: "",
    endDate: "",
    course: "",
  });

  const [tarifTitle, setTarifTitle] = useState<string>("");

  const tarifToEdit = useMemo(() => {
    return newCourseState.tarifs.find((tarif) => {
      return tarif.title === tarifTitle;
    });
  }, [tarifTitle]);

  // console.log(tarifToEdit);

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
        <p>Тарифы</p>
        {
          <TableComp
            items={newCourseState.tarifs}
            renderItem={(tarif) => {
              const endDate = new Date(tarif.endDate).toLocaleString();

              return (
                <TableElement>
                  <EditWrapper>
                    <span>{tarif.title}</span>
                    <ActionButton
                      className="button-action_svg"
                      onClick={() => {
                        dispatch(removeTarif(tarif.title));
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </ActionButton>
                  </EditWrapper>
                  <span>Действует до: {endDate}</span>
                  <ActionButton
                    onClick={() => {
                      setTarifTitle(tarif.title);
                    }}
                  >
                    Изменить тариф
                  </ActionButton>
                </TableElement>
              );
            }}
          >
            <ActionButton
              className="button-action_new"
              onClick={() => {
                setPopupOpened(true);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Добавить тариф
            </ActionButton>
          </TableComp>
        }
      </div>
      {popupOpened && (
        <PopupRight
          closePopup={() => {
            setPopupOpened(false);
          }}
        >
          <div className="popup-right__content">
            <h3>Добавить тариф</h3>
            <Form
              className=""
              onSubmit={(evt) => {
                evt.preventDefault();
                dispatch(addTarif(newTarif));
                setNewTarif({
                  title: "",
                  endDate: "",
                  course: "",
                });
                setPopupOpened(false);
                //   setModulePopup(false);
              }}
            >
              <Label>
                Название тарифа
                <Input
                  type="text"
                  placeholder="Название тарифа"
                  onChange={(evt) => {
                    setNewTarif({ ...newTarif, title: evt.target.value });
                  }}
                />
              </Label>
              <Label>
                Дата окончания
                <Input
                  type="date"
                  onChange={(evt) => {
                    setNewTarif({
                      ...newTarif,
                      endDate: new Date(evt.target.value).toISOString(),
                    });
                  }}
                />
              </Label>
              <ActionButton type="submit">Добавить модуль</ActionButton>
            </Form>
          </div>
          {/* <NewTarif></NewTarif> */}
        </PopupRight>
      )}

      {tarifToEdit && (
        <PopupRight
          closePopup={() => {
            setTarifTitle("");
          }}
        >
          <div className="popup-right__content">
            <h3>Изменить тариф</h3>
            <Form
              className=""
              onSubmit={(evt) => {
                evt.preventDefault();
              }}
            >
              <Label>
                Название модуля
                <Input
                  type="text"
                  defaultValue={tarifToEdit.title}
                  onChange={(evt) => {
                    console.log(evt.target.value);
                    // setNewTarif({...newTarif, title: evt.target.value})
                  }}
                />
              </Label>
              <Label>
                Дата окончания
                <Input
                  type="date"
                  onChange={(evt) => {
                    console.log(evt.target.value);
                    // setNewTarif({...newTarif, endDate: new Date(evt.target.value).toISOString()})
                  }}
                  defaultValue={new Date(tarifToEdit.endDate).toLocaleDateString().split('.').reverse().join('-')}
                />
              </Label>
              <ActionButton type="submit">Изменить тариф</ActionButton>
            </Form>
          </div>
        </PopupRight>
      )}
    </>
  );
}
