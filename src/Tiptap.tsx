import { Editor, EditorProvider, JSONContent } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import "./Tiptap.css";
import TipTapBubbleMenu from "./TiptapBubbleMenu";
import TiptapFloatingMenu from "./TiptapFloatingMenu";
import { useContext } from "react";
import { CourseFilesContext } from "./contexts/courseFilesContext";
// import ActionButton from "./ActionButton";

// import Image from "@tiptap/extension-image";

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
  const { setFiles } = useContext(CourseFilesContext);

  const handleUpdate = ({ editor }: { editor: Editor }) => {
    const content = editor.getJSON();

    // Update content
    updateContent?.(content);

    // Filter files based on current content
    if (isEditable) {
      filterFilesFromContent(content);
    }
  };

  const filterFilesFromContent = (currentContent: JSONContent) => {
    if (!currentContent || !currentContent.content) return;

    const contentFileIds = new Set<string>();

    const extractFileIds = (nodes: JSONContent["content"]) => {
      nodes?.forEach((node) => {
        if (node.type === "image" && node.attrs?.fileId) {
          contentFileIds.add(node.attrs.fileId);
        } else if (node.type === "video" && node.attrs?.fileId) {
          contentFileIds.add(node.attrs.fileId);
        } else if (node.type === "audio" && node.attrs?.fileId) {
          contentFileIds.add(node.attrs.fileId);
        }
      });
    };

    extractFileIds(currentContent.content);

    setFiles((prevFiles) => {
      return prevFiles.filter((file) => {
        return contentFileIds.has(file.fileId);
      });
    });
  };

  //img ext
  const Image = Node.create({
    name: "image",
    group: "block",
    selectable: true,
    atom: true,
    parseHTML() {
      return [
        {
          tag: "img",
        },
      ];
    },
    addAttributes() {
      return {
        src: {
          default: null,
        },
        title: {
          default: null,
        },
        fileId: {
          default: null,
        },
      };
    },
    renderHTML({ HTMLAttributes }) {
      return ["img", mergeAttributes(HTMLAttributes)];
    },
  });

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
        fileId: {
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
        fileId: {
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

  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

  return (
    <EditorProvider
      extensions={extensions}
      content={content ? content : ""}
      slotBefore={<TiptapFloatingMenu />}
      onUpdate={handleUpdate}
      editable={isEditable}
      editorContainerProps={{
        className: isEditable ? "tiptap_editable" : "tiptap_readonly",
      }}
    >
      <TipTapBubbleMenu />
    </EditorProvider>
  );
}
