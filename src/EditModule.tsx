import Input from "./Input";
import Label from "./Label";
import Switch from "./Switch";
import Textarea from "./Textarea";
import FormContainer from "./FormContainer";
import { useShowCurrentModuleLessonsQuery } from "./store/features/apiSlice";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ModuleInterface } from "./intefaces/intefaces";
import "./EditModule.css";
// import TableComp from "./TableComp";
import TableDrag from "./TableDrag";

interface EditModuleProps {
  module: { title: string; _id: string; description: string };
}

export default function EditModule({ module }: EditModuleProps) {
  const { data: lessons } = useShowCurrentModuleLessonsQuery(module._id);

  const [moduleToEdit, setModuleToEdit] = useState<ModuleInterface>({
    title: "",
    _id: "",
    available: false,
    description: "",
    lessons: [],
  });

  useEffect(() => {
    if (lessons) {
      setModuleToEdit((prev) => ({
        ...prev,
        lessons: [...lessons],
      }));
    }
  }, [lessons]);

  return (
    <FormContainer
      submitText="Редактировать модуль"
      submitFunc={() => {}}
      isLoading={false}
      isSuccess={false}
      closeOnSubmit={() => {}}
    >
      <>
        <h3>Редактировать модуль {module.title}</h3>
        <Label>
          Название модуля
          <Input
            type="text"
            placeholder="Название модуля"
            defaultValue={module.title}
            onChange={(e) => {
              setModuleToEdit({
                ...moduleToEdit,
                title: e.target.value,
              });
            }}
          />
        </Label>
        <Label>
          Описание модуля
          <Textarea
            defaultValue={module.description}
            onChange={(e) => {
              setModuleToEdit({
                ...moduleToEdit,
                description: e.target.value,
              });
            }}
          />
        </Label>
        <Switch
          isActive={false}
          text={["Доступен", "Не доступен"]}
          onChange={() => {
            setModuleToEdit({
              ...moduleToEdit,
              available: !moduleToEdit.available,
            });
          }}
        />
        {moduleToEdit.lessons.length > 0 && (
          <div className="lessons-container">
            <h4>Уроки модуля (перетащите для изменения порядка)</h4>

            <TableDrag
              items={moduleToEdit.lessons}
              
              getItemId={(item) => item._id}
            />
          </div>
        )}
      </>
    </FormContainer>
  );
}
