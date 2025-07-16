import Input from "./Input";
import Label from "./Label";
import Switch from "./Switch";
import Textarea from "./Textarea";
import FormContainer from "./FormContainer";
import { useState } from "react";
import { ModuleExtInterface } from "./intefaces/intefaces";
import "./EditModule.css";
import TableDrag from "./TableDrag";
import { useEditModuleMutation } from "./store/features/apiSlice";

interface EditModuleProps {
  module: ModuleExtInterface;
}

export default function EditModule({ module }: EditModuleProps) {
  const [moduleToEdit, setModuleToEdit] = useState<ModuleExtInterface>(module);

  const [editModule] = useEditModuleMutation();

  return (
    <FormContainer
      submitText="Редактировать модуль"
      submitFunc={() => {
        editModule(moduleToEdit)
          .unwrap()
          .then(() => {
            
            // toast.success("Модуль успешно отредактирован");
          })
          .catch(() => {
            // toast.error("Ошибка при редактировании модуля");
          });
      }}
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
          isActive={moduleToEdit.available}
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
              onReorder={(items) => {
                setModuleToEdit({
                  ...moduleToEdit,
                  lessons: items,
                });
              }}
              getItemId={(item) => item._id}
            />
          </div>
        )}
      </>
    </FormContainer>
  );
}
