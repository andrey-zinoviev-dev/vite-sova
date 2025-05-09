import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { CourseFilesContext } from "./contexts/courseFilesContext";

export default function TipTapImage() {
    //ref
    const imageFileRef = useRef<HTMLInputElement | null>(null);

    //editor
    const { editor } = useCurrentEditor();

    //context
    const { updateFunction } = useContext(CourseFilesContext);

    return (
        <>
            <ActionButton onClick={() => {
                imageFileRef.current?.click();
            }}>
                <FontAwesomeIcon icon={faImage} />
            </ActionButton>
            <input onChange={(evt) => {
                const file = evt.target.files && evt.target.files[0];
                const fileUrl = file && window.URL.createObjectURL(file);
                fileUrl && editor?.chain().focus().setImage({src: fileUrl}).run();
                file && updateFunction(file);
                // fileUrl && dispatch(addFile(file));
            }} style={{display: "none"}} type="file" accept=".jpg, .jpeg, .png" ref={imageFileRef}></input>
        </>
    )
}