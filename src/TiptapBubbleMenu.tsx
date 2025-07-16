import { faArrowLeft, faCheck, faLink, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BubbleMenu, useCurrentEditor } from "@tiptap/react"
import "./TiptapBubbleMenu.css"
import { useState } from "react";
import Label from "./Label";
import Input from "./Input";

import ActionButton from "./ActionButton";

export default function TipTapBubbleMenu() {
    const { editor } = useCurrentEditor();

    //state
    const [linkClicked, setLinkClicked] = useState<boolean>(false);
    const [url, setUrl] = useState<string>("")

    //functions
    function closeLink() {
        setLinkClicked(false);
    }

    if(!editor) {
        return null;
    }

    return (
        <BubbleMenu editor={null}>
            <div className="bubble-menu">

                {!linkClicked ? <>
                    <ActionButton style={{fontWeight: "bold"}}>B</ActionButton>
                    <ActionButton style={{fontStyle: "italic"}}>I</ActionButton>
                    <ActionButton>
                        H1
                    </ActionButton>
                    <ActionButton>
                        H2
                    </ActionButton>
                    <ActionButton onClick={() => {
                        setLinkClicked(true);
                    }}>
                        <FontAwesomeIcon icon={faLink} />
                    </ActionButton>
                </>

                :
                
                <div className="bubble-menu__link">
                    <ActionButton onClick={closeLink}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </ActionButton>
                    <Label>
                        Ссылка
                        <Input value={url} onChange={(evt) => {
                            setUrl(evt.target.value);
                        }} placeholder="Например, google.com" />
                        <ActionButton onClick={() => {
                            editor?.chain().focus().extendMarkRange("link").setLink({href: `http://${url}`}).run();
                            setUrl("");
                        }}>
                            <FontAwesomeIcon icon={faCheck} />
                        </ActionButton>
                        <ActionButton onClick={() => {
                            editor.chain().focus().extendMarkRange("link").unsetLink().run();
                        }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </ActionButton>
                    </Label>
                </div>}
            </div>

        </BubbleMenu>
    )
}