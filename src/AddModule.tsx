import { useState } from "react";
import FormContainer from "./FormContainer";
import { NewModuleType } from "./intefaces/intefaces";
import Label from "./Label";
import Input from "./Input";
import Textarea from "./Textarea";
import { useAddModuleMutation } from "./store/features/apiSlice";
import LoadingStatus from "./LoadingStatus";
import StatusSuccess from "./StatusSuccess";
import Switch from "./Switch";
import AddFromContainer from "./AddFromContainer";

interface AddModuleProps {
  courseId: string;
  closeOnSubmit: () => void;
}

export default function AddModule({ courseId, closeOnSubmit }: AddModuleProps) {
  const [newModule, setNewModule] = useState<NewModuleType>({
    title: "",
    description: "",
    available: false,
    lessons: [],
    course: courseId ? courseId : "",
  });

  const [addModule, { isLoading, isSuccess }] = useAddModuleMutation();

  const addModuleStates = {
    loading: () => <LoadingStatus />,
    success: () => <StatusSuccess text="Модуль добавлен" />,
    idle: () => (
      <>
        <h3>Добавить модуль</h3>
        <Label>
          Название модуля
          <Input
            type="text"
            onChange={(evt) =>
              setNewModule({ ...newModule, title: evt.target.value })
            }
            placeholder={"Название модуля"}
          />
        </Label>
        <Label>
          Описание модуля
          <Textarea
            onChange={(evt) =>
              setNewModule({
                ...newModule,
                description: evt.target.value,
              })
            }
            placeholder={"Описание модуля"}
          />
        </Label>
        <Switch
          isActive={newModule.available}
          text={["Доступен", "Не доступен"]}
          onChange={() => {
            setNewModule({
              ...newModule,
              available: !newModule.available,
            });
          }}
        />  
      </>
    ),
  };

  const getCurrentState = () => {
    if (isLoading) return "loading";
    if (isSuccess) return "success";
    return "idle";
  };

  const getStateComponent = () => {
    const currentState = getCurrentState();
    return addModuleStates[currentState as keyof typeof addModuleStates]?.();
  };

  return (
    <AddFromContainer />
    // <FormContainer
    //   submitText="Добавить модуль"
    //   submitFunc={() => {
    //     addModule(newModule);
    //   }}
    //   isLoading={isLoading}
    //   isSuccess={isSuccess}
    //   closeOnSubmit={closeOnSubmit}
    // >
    //   {getStateComponent()}
    // </FormContainer>
  );
}
