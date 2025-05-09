import { faFileAudio, faImage, faLink, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatingMenu, useCurrentEditor } from "@tiptap/react";
import ActionButton from "./ActionButton";
import "./TiptapBubbleMenu.css";
import TipTapAudio from "./TipTapAudio";
import TipTapImage from "./TipTapImage";
import TipTapVideo from "./TipTapVideo";
import TipTapFloatingMenuButton from "./TipTapFloatingMenuButton";

export default function TiptapFloatingMenu() {
    const { editor } = useCurrentEditor();
    // console.log(editor?.isEmpty, editor?.isActive("paragraph"));
    if(!editor) {
        return null;
    }

    //functions
    function handleImage(file: File) {
        const fileUrl = window.URL.createObjectURL(file);
        fileUrl && editor?.chain().focus().setImage({src: fileUrl}).run();
        // window.URL.revokeObjectURL(fileUrl);
    };

    function handleVideo(file: File) {
        const fileUrl = window.URL.createObjectURL(file);
        editor?.chain().focus().insertContent(`<video src=${fileUrl} title=${file?.name} type=${file?.type}></video>`).run();
        // window.URL.revokeObjectURL(fileUrl);
    };

    function handleAudio(file: File) {
        const fileUrl = window.URL.createObjectURL(file);
        editor?.chain().focus().insertContent(`<audio src=${fileUrl} title=${file?.name} type=${file?.type}></audio>`).run();
        // window.URL.revokeObjectURL(fileUrl);
    }

    return (
        <FloatingMenu editor={null}>
            <div className="bubble-menu">
                <ActionButton onClick={() => {
                    editor.chain().focus().setParagraph().run()
                }}>
                    P
                </ActionButton>
                <TipTapFloatingMenuButton handleChange={handleImage} icon={faImage} fileType="image"></TipTapFloatingMenuButton>
                <TipTapFloatingMenuButton handleChange={handleVideo} icon={faVideo} fileType="video"></TipTapFloatingMenuButton>
                <TipTapFloatingMenuButton handleChange={handleAudio} icon={faMusic} fileType="audio"></TipTapFloatingMenuButton>
                {/* <TipTapImage />
                <TipTapVideo></TipTapVideo>
                <TipTapAudio></TipTapAudio> */}
            </div>
        </FloatingMenu>
    )
}