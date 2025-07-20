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
import StatusSuccess from "./StatusSuccess";
import LoadingStatus from "./LoadingStatus";
import EditFormContainer from "./EditFormContainer";

interface EditModuleProps {
  module: ModuleExtInterface;
  closeOnSubmit: () => void;
}

export default function EditModule({ module, closeOnSubmit }: EditModuleProps) {
  // console.log(module.lessons);
  const [moduleToEdit, setModuleToEdit] = useState<ModuleExtInterface>(module);

  const [editModule, { isLoading: isUpdateModuleLoading, isSuccess: isUpdateModuleSuccess }] = useEditModuleMutation();

  const sortedLessons = [...moduleToEdit.lessons].sort(
    (a, b) => a.order - b.order
  );

  //loading states
  const editModuleStates = {
    loading: () => <LoadingStatus />,
    success: () => <StatusSuccess text="Модуль обновлен" />,
    // upload: () => (
    //   <CourseFilesContext.Provider value={{ files, setFiles }}>
    //     <FileUpload handleAfterUpload={handleLessonUpdate} />
    //   </CourseFilesContext.Provider>
    // ),
    idle: () => (
      <EditFormContainer />
      // <>
      //   <h3>Редактировать модуль {module.title}</h3>
      //   <Label>
      //     Название модуля
      //     <Input
      //       type="text"
      //       placeholder="Название модуля"
      //       defaultValue={module.title}
      //       onChange={(e) => {
      //         setModuleToEdit({
      //           ...moduleToEdit,
      //           title: e.target.value,
      //         });
      //       }}
      //     />
      //   </Label>
      //   <Label>
      //     Описание модуля
      //     <Textarea
      //       defaultValue={module.description}
      //       onChange={(e) => {
      //         setModuleToEdit({
      //           ...moduleToEdit,
      //           description: e.target.value,
      //         });
      //       }}
      //     />
      //   </Label>
      //   <Switch
      //     isActive={moduleToEdit.available}
      //     text={["Доступен", "Не доступен"]}
      //     onChange={() => {
      //       setModuleToEdit({
      //         ...moduleToEdit,
      //         available: !moduleToEdit.available,
      //       });
      //     }}
      //   />
      //   {sortedLessons.length > 0 && (
      //     <div className="lessons-container">
      //       <h4>Уроки модуля (перетащите для изменения порядка)</h4>

      //       <TableDrag
      //         items={sortedLessons}
      //         onReorder={(items) => {
      //           // console.log(items);
      //           setModuleToEdit({
      //             ...moduleToEdit,
      //             lessons: items.map((item, index) => ({
      //               ...item,
      //               order: index,
      //             })),
      //           });
      //         }}
      //         getItemId={(item) => item._id}
      //       />
      //     </div>
      //   )}
      // </>
    ),
  };

  const getCurrentState = () => {
    if (isUpdateModuleLoading) return "loading";
    if (isUpdateModuleSuccess) return "success";
    return "idle";
  };

  const getStateComponent = () => {
    const currentState = getCurrentState();
    return editModuleStates[currentState as keyof typeof editModuleStates]?.();
  };

  return (
    <FormContainer
      submitText="Редактировать модуль"
      submitFunc={() => {
        editModule(moduleToEdit)
          .unwrap()
          .then(() => {
            console.log("Module updated");
            // toast.success("Модуль успешно отредактирован");
          })
          .catch(() => {
            // toast.error("Ошибка при редактировании модуля");
          });
      }}
      isLoading={isUpdateModuleLoading}
      isSuccess={isUpdateModuleSuccess}
      closeOnSubmit={closeOnSubmit}
    >
      <>
        {getStateComponent()}
        {/* <h3>Редактировать модуль {module.title}</h3>
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
        {sortedLessons.length > 0 && (
          <div className="lessons-container">
            <h4>Уроки модуля (перетащите для изменения порядка)</h4>

            <TableDrag
              items={sortedLessons}
              onReorder={(items) => {
                // console.log(items);
                setModuleToEdit({
                  ...moduleToEdit,
                  lessons: items.map((item, index) => ({
                    ...item,
                    order: index,
                  })),
                });
              }}
              getItemId={(item) => item._id}
            />
          </div>
        )} */}
      </>
    </FormContainer>
  );
}
