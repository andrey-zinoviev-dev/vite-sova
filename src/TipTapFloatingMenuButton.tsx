import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useContext, useRef } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { CourseFilesContext } from "./contexts/courseFilesContext";

interface TipTapFloatingMenuButtonInterface {
    icon: IconProp,
    fileType: string,
    handleChange: (file: File) => void,
};

export default function TipTapFloatingMenuButton({ icon, fileType, handleChange }: TipTapFloatingMenuButtonInterface) {
    //ref
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    //accept map
    const acceptObj: {
        [index: string]: string,
    } = {
        video: ".mp4, .mov",
        audio: ".mp3, .ogg, .wav",
        image: ".jpeg, .jpg, .png",
    };

    //editor
    // const { editor } = useCurrentEditor();

    //context
    const { updateFunction } = useContext(CourseFilesContext);

    return (
        <>
            <ActionButton onClick={() => {
                inputFileRef.current?.click();
            }}>
                <FontAwesomeIcon icon={icon} />
            </ActionButton>
            <input ref={inputFileRef} type="file" onChange={(evt) => {
                const file = evt.target.files && evt.target.files[0];
                // const fileUrl = file && window.URL.createObjectURL(file);
                file && handleChange(file);
                // editor?.chain().focus().insertContent(`<video src=${fileUrl} title=${file?.name} type=${file?.type}></video>`).run();
                file && updateFunction(file);
            }} style={{display: "none"}} accept={acceptObj[fileType]}></input>
        </>
    )
}