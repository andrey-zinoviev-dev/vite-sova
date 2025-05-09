import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
// import Input from "./Input";
import { useContext, useRef } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { CourseFilesContext } from "./contexts/courseFilesContext";

export default function TipTapAudio() {
    //ref
    const audioInputRef = useRef<HTMLInputElement | null>(null);

    //editor
    const { editor } = useCurrentEditor();

    //context
    const { updateFunction } = useContext(CourseFilesContext);

    return (
        <>
            <ActionButton onClick={() => {
                audioInputRef.current?.click();
            }}>
                <FontAwesomeIcon icon={faMusic} />
            </ActionButton>
            <input onChange={(evt) => {
                // console.log(evt.target.files && evt.target.files[0]);
                const file = evt.target.files && evt.target.files[0];
                const fileUrl = file && window.URL.createObjectURL(file);
                editor?.chain().focus().insertContent(`<audio src=${fileUrl} title=${file?.name} type=${file?.type}></audio>`).run();
                file && updateFunction(file);
                // fileUrl && dispatch(addFile(file));
            }} ref={audioInputRef} type="file" accept=".mp3, .ogg, .wav" style={{display: "none"}}></input>
        </>
    )
} 