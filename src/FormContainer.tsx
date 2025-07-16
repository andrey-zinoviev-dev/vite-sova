// import { JSONContent } from "@tiptap/react";
import ActionButton from "./ActionButton";

interface FormContainerInterface {
  submitText: string;
  submitFunc: () => void;
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
  isSuccess: boolean;
  closeOnSubmit: () => void;
}

export default function FormContainer({
  submitText,
  submitFunc,
  children,
  isLoading,
  isSuccess,
  closeOnSubmit,
}: FormContainerInterface) {
  // const [files, setFiles] = useState<FileExtInterface[]>([]);
  // console.log(files);
  // const

  const getButtonText = () => {
    if (isLoading) return "Обработка...";
    if (isSuccess) return "Закрыть";
    return submitText;
  };

  return (
    <>
      {children}
      <ActionButton onClick={isSuccess ? closeOnSubmit : submitFunc}>
        {getButtonText()}
      </ActionButton>
    </>
  );
}
