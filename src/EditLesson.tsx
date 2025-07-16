import {
  FileExtInterface,
  LessonInterface,
  ModuleExtInterface,
  StreamLessonInterface,
} from "./intefaces/intefaces";
import {
  useEditLessonMutation,
  useShowCurrentLessonQuery,
} from "./store/features/apiSlice";
interface EditLessonInterface {
  lessonId: string;
  modules: ModuleExtInterface[];
  closeOnSubmit: () => void;
}
import { useEffect, useState } from "react";

import FormContainer from "./FormContainer";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import EditTiptap from "./EditTiptap";
import FileUpload from "./FileUpload";
import { CourseFilesContext } from "./contexts/courseFilesContext";

import LoadingStatus from "./LoadingStatus";
import StatusSuccess from "./StatusSuccess";

export default function EditLesson({
  lessonId,
  modules,
  closeOnSubmit,
}: EditLessonInterface) {
  const { data = {} as LessonInterface } = useShowCurrentLessonQuery({
    lessonId: lessonId,
  });

  const [
    updateLesson,
    {
      isLoading: isUpdateLessonLoading,
      isSuccess: isUpdateLessonSuccess,
      reset: resetUpdateLesson,
    },
  ] = useEditLessonMutation();

  const [files, setFiles] = useState<FileExtInterface[]>([]);

  const [lessonToEdit, setLessonToEdit] = useState<StreamLessonInterface>({
    ...data,
    active: data.available,
  });

  const [isUploadInitiated, setIsUploadInitiated] = useState(false);

  //functions
  function initiateUpdateLesson() {
    if (files.length > 0) {
      setIsUploadInitiated(true);
    } else {
      handleLessonUpdate();
    }
  }

  function handleLessonUpdate() {
    setIsUploadInitiated(false);
    updateLesson(lessonToEdit)
      .unwrap()
      .then(() => {
        setFiles([]);
        resetUpdateLesson();
      });
  }

  const editLessonStates = {
    loading: () => <LoadingStatus />,
    success: () => <StatusSuccess text="Урок обновлен" />,
    upload: () => (
      <CourseFilesContext.Provider value={{ files, setFiles }}>
        <FileUpload handleAfterUpload={handleLessonUpdate} />
      </CourseFilesContext.Provider>
    ),
    idle: () => (
      <>
        <h3>Редактировать урок</h3>
        <Label>
          Название урока
          <Input
            type="text"
            defaultValue={data.title}
            placeholder="Название урока"
            onChange={(e) => {
              setLessonToEdit((prevValue) => {
                return {
                  ...prevValue,
                  title: e.target.value,
                };
              });
            }}
          />
        </Label>
        <Label>
          Модуль, в котором находится урок
          <Select
            onChange={(e) => {
              setLessonToEdit((prevValue) => {
                return {
                  ...prevValue,
                  module: modules.find(
                    (module) => module._id === e.target.value
                  ) as ModuleExtInterface,
                };
              });
            }}
            defaultValue={data.module?._id}
          >
            <option value="">Выберите модуль</option>
            {modules.map((module) => {
              return (
                <option key={module._id} value={module._id}>
                  {module.title}
                </option>
              );
            })}
          </Select>
        </Label>
        <Switch
          isActive={data.available}
          text={["Доступен", "Не доступен"]}
          onChange={() => {
            setLessonToEdit((prevValue) => {
              return {
                ...prevValue,
                available: prevValue.available
                  ? !prevValue.available
                  : !data.available,
              };
            });
          }}
        />
        <CourseFilesContext.Provider
          value={{
            files: files,
            setFiles: setFiles,
          }}
        >
          <EditTiptap
            files={files}
            setFiles={setFiles}
            updateContent={(content) => {
              setLessonToEdit((prevValue) => {
                return {
                  ...prevValue,
                  content: content,
                };
              });
            }}
            content={data.content}
          />
        </CourseFilesContext.Provider>
      </>
    ),
  };

  const getCurrentState = () => {
    if (isUpdateLessonLoading) return "loading";
    if (isUpdateLessonSuccess) return "success";
    if (isUploadInitiated) return "upload";
    return "idle";
  };

  const getStateComponent = () => {
    const currentState = getCurrentState();
    return editLessonStates[currentState as keyof typeof editLessonStates]?.();
  };

  useEffect(() => {
    if (data._id) {
      setLessonToEdit({
        ...data,
        active: data.available,
      });
    }
    
  }, [data]);
  

  return data._id ? (
    <FormContainer submitText="Обновить урок" submitFunc={initiateUpdateLesson} isLoading={isUpdateLessonLoading} isSuccess={isUpdateLessonSuccess} closeOnSubmit={closeOnSubmit}>
      {getStateComponent()}
    </FormContainer>
  ) : (
    <span>Урок не найден</span>
  );
}
