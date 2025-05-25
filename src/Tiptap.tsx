import { Editor, EditorProvider, JSONContent } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import "./Tiptap.css";
import TipTapBubbleMenu from "./TiptapBubbleMenu";
import TiptapFloatingMenu from "./TiptapFloatingMenu";
// import ActionButton from "./ActionButton";

import Image from "@tiptap/extension-image";

interface TipTapProps {
  updateContent?: (content: JSONContent) => void;
  content?: JSONContent;
  isEditable?: boolean;
}

export default function TipTap({
  updateContent,
  content,
  isEditable = false,
}: TipTapProps) {
  // const [content, setContent] = useState("");

  const handleUpdate = ({ editor }: { editor: Editor }) => {
    const content = editor.getJSON();
    updateContent?.(content);
  };

  //audio ext

  const Audio = Node.create({
    name: "audio",
    group: "block",
    selectable: true,
    atom: true,
    parseHTML() {
      return [
        {
          tag: "audio",
        },
      ];
    },
    addAttributes() {
      return {
        src: {
          default: null,
        },
        controls: {
          default: true,
        },
        controlsList: {
          default: "nodownload",
        },
        oncontextmenu: {
          default: "return false",
        },
        title: {
          default: null,
        },
        type: {
          default: null,
        },
      };
    },
    renderHTML({ HTMLAttributes }) {
      return ["audio", mergeAttributes(HTMLAttributes)];
    },
  });

  const Video = Node.create({
    name: "video",
    group: "block",
    selectable: true,
    atom: true,
    parseHTML() {
      return [
        {
          tag: "video",
        },
      ];
    },
    addAttributes() {
      return {
        src: {
          default: null,
        },
        controls: {
          default: true,
        },
        controlsList: {
          default: "nodownload",
        },
        oncontextmenu: {
          default: "return false",
        },
        title: {
          default: null,
        },
      };
    },
    renderHTML({ HTMLAttributes }) {
      return ["video", mergeAttributes(HTMLAttributes)];
    },
  });

  const extensions = [
    StarterKit,
    Link.configure({
      openOnClick: true,
      autolink: true,
    }),
    Image,
    Audio,
    Video,
    Placeholder.configure({
      placeholder: "Введите текст...",
    }),
  ];

  // const content = "";

  //test purposes

  return (
    <EditorProvider
      extensions={extensions}
      content={content ? content : ""}
      slotBefore={<TiptapFloatingMenu />}
      onUpdate={handleUpdate}
      editable={isEditable}
    >
      <TipTapBubbleMenu />
    </EditorProvider>
  );
}
