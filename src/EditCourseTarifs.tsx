import { useParams } from "react-router";
import { NewTarifType, TarifInterface } from "./intefaces/intefaces";
import {
  useAddTarifMutation,
  useShowTarifsQuery,
  // useDeleteTarifMutation,
} from "./store/features/apiSlice";
import TableComp from "./TableComp";
// import TableElement from "./TableElement";
// import EditWrapper from "./EditWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EditElementWrapper from "./EditElementWrapper";
import ActionButton from "./ActionButton";
import PopupRight from "./PopupRight";
import { useState } from "react";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
// import DeleteButton from "./DeleteButton";
// import EditButton from "./EditButton";
// import TarifCard from "./TarifCard";
import EditCard from "./EditCard";
export default function EditCourseTarifs() {
  const { courseId } = useParams();

  // const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
  //   courseId: courseId,
  // });

  const { data = [] as TarifInterface[] } = useShowTarifsQuery(
    courseId ? courseId : ""
  );

  const [addTarif] = useAddTarifMutation();
  // const [deleteTarif] = useDeleteTarifMutation();

  const [tarifPopup, setTarifPopup] = useState(false);
  const [newTarif, setNewTarif] = useState<NewTarifType>({
    title: "",
    endDate: "",
    course: courseId ? courseId : "",
    // _id: "",
  });

  const [tarifId, setTarifId] = useState<string | null>(null);

  const selectedTarif = data.find((item) => item._id === tarifId);

  // console.log(selectedTarif);

  return (
    
      <>
        <EditElementWrapper>
          <h3>Тарифы</h3>
        </EditElementWrapper>
        <TableComp
          items={data}
          renderItem={(item, index) => {
            const endDate = new Date(item.endDate).toLocaleDateString();

            return (
              <li key={item._id}>
                <EditCard
                  title={item.title}
                  index={`${index + 1}`}
                  onClick={() => {
                    setTarifId(item._id);
                  }}
                  onDeleteClick={() => {
                    console.log("delete tarif", item);
                  }}
                  buttonText="Удалить тариф"
                >
                  <p>Истекает: {endDate}</p>
                </EditCard>
              </li>
            );
          }}
        >
          <ActionButton
            className="button-action_new"
            onClick={() => setTarifPopup(true)}
          >
            Новый тариф
            <FontAwesomeIcon icon={faPlus} />
          </ActionButton>
        </TableComp>

        {tarifPopup && (
          <PopupRight closePopup={() => setTarifPopup(false)}>
            <div className="popup-right__content">
              <h3>Добавить тариф</h3>
              <Form
                className=""
                onSubmit={(evt) => {
                  evt.preventDefault();
                  addTarif({ ...newTarif })
                    .unwrap()
                    .then((res) => {
                      console.log(res);
                      setTarifPopup(false);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Label>
                  Название
                  <Input
                    type="text"
                    onChange={(evt) => {
                      setNewTarif({ ...newTarif, title: evt.target.value });
                    }}
                  />
                </Label>
                <Label>
                  Срок действия
                  <Input
                    type="date"
                    onChange={(evt) => {
                      const tarifEnd = new Date(evt.target.value).toISOString();
                      setNewTarif({ ...newTarif, endDate: tarifEnd });
                    }}
                  />
                </Label>
                <ActionButton type="submit">Добавить тариф</ActionButton>
              </Form>
            </div>
          </PopupRight>
        )}

        {tarifId && (
          <PopupRight closePopup={() => setTarifId(null)}>
            <div className="popup-right__content">
              <h3>Изменить тариф</h3>
              <Form
                className=""
                onSubmit={(evt) => {
                  evt.preventDefault();
                }}
              >
                <Label>
                  Название
                  <Input type="text" defaultValue={selectedTarif?.title} />
                </Label>
                <Label>
                  Срок действия
                  <Input
                    type="date"
                    defaultValue={new Date(selectedTarif?.endDate as string)
                      .toLocaleDateString()
                      .split(".")
                      .reverse()
                      .join("-")}
                  />
                </Label>
                <ActionButton type="submit">Изменить тариф</ActionButton>
              </Form>
            </div>
          </PopupRight>
        )}
      </>
    )
}
