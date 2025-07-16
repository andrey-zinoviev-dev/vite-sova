import FormContainer from "./FormContainer";
import { useDeleteLessonMutation } from "./store/features/apiSlice";

interface DeleteLessonProps {
  lessonId: string;
  closeOnSubmit: () => void;
}

export default function DeleteLesson({ lessonId, closeOnSubmit }: DeleteLessonProps) {
  const [deleteLesson, { isLoading: isDeleteLessonLoading, isSuccess: isDeleteLessonSuccess }] = useDeleteLessonMutation();

  function handleDeleteLesson() {
    deleteLesson(lessonId)
      .unwrap()
      .then(() => {
        console.log("lesson deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //functions
  function getComponentText() {
    if (isDeleteLessonLoading) return "Обработка...";
    if (isDeleteLessonSuccess) return "Урок удален";
    return "Вы действительно хотите удалить урок?";
  }

  return (
    <FormContainer
      submitText="Удалить урок"
      submitFunc={handleDeleteLesson}
      isLoading={isDeleteLessonLoading}
      isSuccess={isDeleteLessonSuccess}
      closeOnSubmit={closeOnSubmit}
    >
      <span>{getComponentText()}</span>
    </FormContainer>
  );
}