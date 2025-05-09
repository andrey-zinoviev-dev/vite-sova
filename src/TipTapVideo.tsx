import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCurrentEditor } from "@tiptap/react";
import { useRef } from "react";
import ActionButton from "./ActionButton";

export default function TipTapVideo() {
    //ref
    const videoInputRef = useRef<HTMLInputElement | null>(null);

    //editor
    const { editor } = useCurrentEditor();

    return (
        <>
            <ActionButton onClick={() => {
                videoInputRef.current?.click();
            }}>
                <FontAwesomeIcon icon={faVideo} />
            </ActionButton>
            <input ref={videoInputRef} type="file" onChange={(evt) => {
                // const file = evt.target.files && evt.target.files[0];
                // const fileUrl = file && window.URL.createObjectURL(file);
                // editor?.chain().focus().insertContent(`<video src=${fileUrl} title=${file?.name} type=${file?.type}></video>`).run();
            }} style={{display: "none"}} accept=".mp4, .mov"></input>
        </>
    )
}