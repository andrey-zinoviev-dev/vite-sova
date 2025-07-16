import { useState } from "react";
import {
  FileExtInterface,
  ModuleExtInterface,
  NewLessonType,
} from "./intefaces/intefaces";
import FormContainer from "./FormContainer";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import { CourseFilesContext } from "./contexts/courseFilesContext";
import TipTap from "./Tiptap";
import Switch from "./Switch";
import {
  useAddLessonMutation,
  useEditModuleMutation,
} from "./store/features/apiSlice";
// import { s3ClientInitiated } from "./utils/s3Client";
// import { Upload } from "@aws-sdk/lib-storage";
import FileUpload from "./FileUpload";
import LoadingStatus from "./LoadingStatus";
import StatusSuccess from "./StatusSuccess";
import { useParams } from "react-router";

interface AddLessonInterface {
  modules: ModuleExtInterface[];
  closeOnSubmit: () => void;
}

export default function AddLesson({
  modules,
  closeOnSubmit,
}: AddLessonInterface) {
  const { courseId } = useParams();

  const [newLesson, setNewLesson] = useState<NewLessonType>({
    title: "",
    available: false,
    content: {
      type: "doc",
      content: [],
    },
    module: "",
    course: courseId || "",
  });

  const [
    addLesson,
    {
      isLoading: isAddLessonLoading,
      isSuccess: isAddLessonSuccess,
      // reset: resetAddLesson,
    },
  ] = useAddLessonMutation();

  //for test purposes update module after lesson add
  const [updateModule] = useEditModuleMutation();

  const [files, setFiles] = useState<FileExtInterface[]>([]);
  const [uploadInitiated, setUploadInitiated] = useState(false);

  //functions
  function initiateAddLesson() {
    if (files.length > 0) {
      setUploadInitiated(true);
    } else {
      handleLessonAdd();
    }
  }

  function handleLessonAdd() {
    setUploadInitiated(false);
    addLesson(newLesson)
      .unwrap()
      .then((data) => {
        // console.log(data);
        const updatedModule = {
          ...data.module,
          lessons: [...data.module.lessons, data],
        };
        // console.log(updatedModule);
        return updateModule(updatedModule)
          .unwrap()
          .then(() => {
            console.log("Module updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addLessonStates = {
    loading: () => <LoadingStatus />,
    success: () => <StatusSuccess text="Урок добавлен" />,
    upload: () => (
      <CourseFilesContext.Provider value={{ files, setFiles }}>
        <FileUpload handleAfterUpload={handleLessonAdd} />
      </CourseFilesContext.Provider>
    ),
    idle: () => (
      <>
        <Label>
          Название урока
          <Input
            type="text"
            // defaultValue={newLesson.title}
            placeholder="Название урока"
            onChange={(e) => {
              setNewLesson((prevValue) => {
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
              setNewLesson((prevValue) => {
                return {
                  ...prevValue,
                  module: e.target.value,
                };
              });
            }}
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
          isActive={newLesson.available}
          text={["Доступен", "Не доступен"]}
          onChange={() => {
            setNewLesson({
              ...newLesson,
              available: !newLesson.available,
            });
          }}
        />
        <div>
          <span>Контент урока</span>
          <CourseFilesContext.Provider
            value={{
              files: files,
              setFiles: setFiles,
            }}
          >
            <TipTap
              isEditable={true}
              updateContent={(content) => {
                setNewLesson((prevValue) => {
                  return {
                    ...prevValue,
                    content: content,
                  };
                });
              }}
            ></TipTap>
          </CourseFilesContext.Provider>
        </div>
      </>
    ),
  };

  const getCurrentState = () => {
    if (isAddLessonLoading) return "loading";
    if (isAddLessonSuccess) return "success";
    if (uploadInitiated) return "upload";
    return "idle";
  };

  const getStateComponent = () => {
    const currentState = getCurrentState();
    return addLessonStates[currentState as keyof typeof addLessonStates]?.();
  };

  return (
    <>
      <h3>Добавить урок</h3>
      <FormContainer
        submitFunc={initiateAddLesson}
        submitText="Добавить урок"
        isLoading={isAddLessonLoading}
        isSuccess={isAddLessonSuccess}
        closeOnSubmit={closeOnSubmit}
      >
        {getStateComponent()}
      </FormContainer>
    </>
  );
}
