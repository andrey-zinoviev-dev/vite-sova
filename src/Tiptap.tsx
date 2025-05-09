import { EditorProvider } from "@tiptap/react"
import { Node, mergeAttributes } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {Link} from "@tiptap/extension-link"

import "./Tiptap.css"
import TipTapBubbleMenu from "./TiptapBubbleMenu";
import TiptapFloatingMenu from "./TiptapFloatingMenu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import TipTapMenu from "./TipTapMenu";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";

export default function TipTap() {
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
          ]
        },
        addAttributes() {
          return {
            "src": {
              default: null,
            },
            "controls" : {
              default: true,
            },
            "controlsList": {
              default: "nodownload",
            },
            "oncontextmenu": {
              default: "return false"
            },
            "title": {
              default: null,
            },
            "type": {
              default: null,
            }
          }
        },
        renderHTML({HTMLAttributes}) {
          return ['audio', mergeAttributes(HTMLAttributes)];
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
          ]
        },
        addAttributes() {
          return {
            "src": {
              default: null,
            },
            "controls" : {
              default: true,
            },
            "controlsList": {
              default: "nodownload",
            },
            "oncontextmenu": {
              default: "return false"
            },
            "title": {
              default: null,
            }
          }
        },
        renderHTML({HTMLAttributes}) {
          return ['video', mergeAttributes(HTMLAttributes)];
        },
    });
    
    const extensions = [StarterKit, 
        Link.configure({
            openOnClick: true,
            autolink: true,
        }), 
        Image,
        Audio,
        Video,
    ];

    const content = "";

    //test purposes


    return (
        <EditorProvider extensions={extensions} content={content} slotBefore={<TiptapFloatingMenu />}>
            <TipTapBubbleMenu />
        </EditorProvider>

    )
}