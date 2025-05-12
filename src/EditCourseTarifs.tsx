import { useParams } from "react-router";
import { NewTarifType, TarifInterface } from "./intefaces/intefaces";
import {
  useAddTarifMutation,
  useShowTarifsQuery,
  useDeleteTarifMutation,
} from "./store/features/apiSlice";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
import EditWrapper from "./EditWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditElementWrapper from "./EditElementWrapper";
import ActionButton from "./ActionButton";
import PopupRight from "./PopupRight";
import { useState } from "react";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
export default function EditCourseStudentsTarifs() {
  const { courseId } = useParams();

  // const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
  //   courseId: courseId,
  // });

  const { data = [] as TarifInterface[] } = useShowTarifsQuery(courseId ? courseId : "");

  const [addTarif, { isLoading }] = useAddTarifMutation();
  const [deleteTarif, { isLoading: isDeleting }] = useDeleteTarifMutation();

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
    data.length > 0 && (
      <>
        <EditElementWrapper>
          <h3>Тарифы</h3>
        </EditElementWrapper>
        <TableComp
          items={data}
          renderItem={(item) => {
            const endDate = new Date(item.endDate).toLocaleDateString();

            return (
              <TableElement>
                <EditWrapper>
                  <span>{item.title}</span>
                  <EditButton
                    onClick={() => {
                      setTarifId(item._id);
                    }}
                  />
                  {/* <DeleteButton
                    onClick={() => {
                      deleteTarif(item._id)
                        .unwrap()
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  /> */}
                </EditWrapper>
                <span>Истекает: {endDate}</span>
                <ActionButton className="button-action button-action_delete">
                  Удалить тариф
                  {/* <FontAwesomeIcon icon={faTrash} /> */}
                </ActionButton>
                {/* <DeleteButton
                  onClick={() => {
                    deleteTarif(item._id)
                      .unwrap()
                      .then((res) => {
                        console.log(res);
                      });
                  }}
                /> */}
              </TableElement>
            );
          }}
        >
          <ActionButton
            className="button-action_new"
            onClick={() => setTarifPopup(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Новый тариф
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
                    defaultValue={new Date(selectedTarif?.endDate as string).toLocaleDateString().split(".").reverse().join("-")}
                  />
                </Label>
                <ActionButton type="submit">Изменить тариф</ActionButton>
              </Form>
            </div>
          </PopupRight>
        )}
      </>
    )
  );
}
