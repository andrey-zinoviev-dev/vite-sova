import { useParams, Outlet } from "react-router";
// import EditComp from "./EditComp";
import { CourseInterface } from "./intefaces/intefaces";
import { useShowCurrentCourseQuery } from "./store/features/apiSlice";
// import Label from "./Label";
// import Input from "./Input";
// import Textarea from "./Textarea";
// import ActionButton from "./ActionButton";
import BackButton from "./BackButton";
// import Switch from "./Switch";
// import { useState } from "react";
import "./EditCourse.css";
// import TableComp from "./TableComp";
// import TableElement from "./TableElement";
// import TarifData from "./TarifData";
// import ActionButton from "./ActionButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import PopupRight from "./PopupRight";
// import Form from "./Form";
// import NewModule from "./NewModule";
// import EditWrapper from "./EditWrapper";
import NavigationBar from "./NavigationBar";
import EditElementWrapper from "./EditElementWrapper";
export default function EditCourse() {
//   const { courseId } = useParams();
//   const { data = {} as CourseInterface } = useShowCurrentCourseQuery({
//     courseId: courseId,
//   });

  const [newModule, setNewModule] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  //   console.log(data._id ? data.available : false);
  //   const [isActive, setIsActive] = useState(data._id ? data.available : false);
  // console.log(isActive);

  return (
    <>
      <section className="edit-course">
        {/* <button></button> */}
        <BackButton text="Назад" />
        {/* <div>
          <h2>Редактирование курса</h2>
          <p>Редактируйте ваши курсы, их модули, их доступ, тарифы, измените список учеников</p>
        </div> */}
        <EditElementWrapper>
          <h2>Редактирование курса</h2>
          <p>
            Редактируйте ваши курсы здесь
          </p>
        </EditElementWrapper>
        <div className="edit-course__content">
          <NavigationBar
            items={[
              { title: "Общие данные", link: "general" },
              { title: "Модули", link: "modules" },
              { title: "Тарифы", link: "students" },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="edit-course__params">
            <Outlet />
          </div>
        </div>

        {/* <div className="edit-course__wrapper">
            <span>Модули</span>
            <TableComp
              items={data.modules}
              renderItem={(item) => {
                return (
                  <TableElement>
                    <EditWrapper>
                      <span>{item.title}</span>
                      <button
                        type="button"
                        onClick={() => {
                          console.log(`delete module ${item._id}`);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </EditWrapper>

                    <p>{item.description}</p>
                    <ActionButton
                      onClick={() => {
                        console.log(`edit module ${item._id}`);
                      }}
                    >
                      Изменить модуль
                    </ActionButton>
                  </TableElement>
                );
              }}
            >
              <ActionButton
                className="button-action_new"
                onClick={() => {
                  setNewModule(true);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
                Новый модуль
              </ActionButton>
            </TableComp>
          </div>
          <div className="edit-course__wrapper">
            <span>Доступ к курсу</span>
            <Switch
              isActive={data.available}
              text={data.available ? "Курс открыт" : "Курс закрыт"}
            />
          </div>
          <div className="edit-course__wrapper">
            <span>Тарифы</span>
            <TableComp
              items={data.tarifs}
              renderItem={(item) => {
                return (
                  <TableElement>
                    <TarifData
                      item={item}
                      removeTarif={() => {}}
                      tarifStart={data.startDate}
                    ></TarifData>
                  </TableElement>
                );
              }}
            ></TableComp>
          </div>
          <div className="edit-course__wrapper">
            <span>Ученики на курсе: {data.students.length}</span>
            <button
              type="button"
              onClick={() => {
                console.log("add students");
              }}
            >
              Добавить учеников
            </button>
          </div>
          <div className="edit-course__wrapper">
            <EditComp
              submitFunction={() => {
                console.log("submit");
              }}
              formActionText={`Обновить ${data.title}`}
            >
              <Label>
                Название курса
                <Input
                  placeholder="Название курса"
                  defaultValue={data.title}
                ></Input>
              </Label>
              <Label>
                Описание курса
                <Textarea
                  placeholder="Описание курса"
                  defaultValue={data.description}
                ></Textarea>
              </Label>
            </EditComp>
          </div> */}
      </section>
    </>
  );
}
