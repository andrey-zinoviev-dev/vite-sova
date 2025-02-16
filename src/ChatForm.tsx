import { useRef, useState } from "react";
import Form from "./Form";
import "./ChatForm.css"
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";

// interface FormWithFileInterface {
//     icon: IconProp,
// }


export default function ChatForm() {
    //state
    const [message, setMessage] = useState<{ message: string } | null>(null);
    const [openenFiles, setOpenedFiles] = useState<boolean>(false);

    //ref
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    //functions
    function handleFileUpdate(evt:React.ChangeEvent<HTMLInputElement>) {
        setOpenedFiles(true);
        const files = evt.target.files;
        if(files) {
            console.log(files);
        }
    }

    return (
        <>
            <Form icon={faPaperPlane} onSubmit={(evt) => {
                evt.preventDefault();
                console.log(message);
            }} className="form_file" isLoading={false} isSuccess={false} >
                <div className="chat__form-wrapper">
                    <button onClick={() => {
                        inputFileRef.current?.click();
                    }} type="button">
                        <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    <Input className="form_file__input" name="message" placeholder="Введите сообщение" updateValue={setMessage} type="text" autoFocus ></Input>
                </div>
                <input accept="video/*,audio/*" onChange={handleFileUpdate} ref={inputFileRef} type="file"></input>
            </Form>

            {openenFiles && <Popup></Popup>}
        </>
    )
}