import { faImage, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatingMenu, useCurrentEditor } from "@tiptap/react";
import ActionButton from "./ActionButton";
import "./TiptapBubbleMenu.css";
// import TipTapAudio from "./TipTapAudio";
// import TipTapImage from "./TipTapImage";
// import TipTapVideo from "./TipTapVideo";
import TipTapFloatingMenuButton from "./TipTapFloatingMenuButton";
import { FileExtInterface } from "./intefaces/intefaces";

export default function TiptapFloatingMenu() {
  const { editor } = useCurrentEditor();
  // console.log(editor?.isEmpty, editor?.isActive("paragraph"));
  if (!editor) {
    return null;
  }

  //functions
  function handleImage(file: FileExtInterface) {
    const fileUrl = window.URL.createObjectURL(file.file);
    if (fileUrl) {
      editor
        ?.chain()
        .focus()
        .insertContent(
          `<img src=${fileUrl} title=${file?.file?.name} fileId=${file?.fileId}></img>`
        )
        .run();
    }
    // window.URL.revokeObjectURL(fileUrl);
  }

  function handleVideo(file: FileExtInterface) {
    const fileUrl = window.URL.createObjectURL(file.file);
    editor
      ?.chain()
      .focus()
      .insertContent(
        `<video src=${fileUrl} title=${file?.file?.name} type=${file?.file?.type} fileId=${file?.fileId}></video>`
      )
      .run();
    // window.URL.revokeObjectURL(fileUrl);
  }

  function handleAudio(file: FileExtInterface) {
    const fileUrl = window.URL.createObjectURL(file.file);
    editor
      ?.chain()
      .focus()
      .insertContent(
        `<audio src=${fileUrl} title=${file?.file?.name} type=${file?.file?.type} fileId=${file?.fileId}></audio>`
      )
      .run();
    // window.URL.revokeObjectURL(fileUrl);
  }

  return (
    <FloatingMenu editor={null}>
      <div className="bubble-menu">
        <ActionButton
          onClick={() => {
            editor.chain().focus().setParagraph().run();
          }}
        >
          P
        </ActionButton>
        <TipTapFloatingMenuButton
          handleChange={handleImage}
          icon={faImage}
          fileType="image"
        ></TipTapFloatingMenuButton>
        <TipTapFloatingMenuButton
          handleChange={handleVideo}
          icon={faVideo}
          fileType="video"
        ></TipTapFloatingMenuButton>
        <TipTapFloatingMenuButton
          handleChange={handleAudio}
          icon={faMusic}
          fileType="audio"
        ></TipTapFloatingMenuButton>
      </div>
    </FloatingMenu>
  );
}
