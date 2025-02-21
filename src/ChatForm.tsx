import { useRef, useState } from "react";
import Form from "./Form";
import "./ChatForm.css"
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
// import FilePopup from "./FilePopup";
import Popup from "./Popup";
import RowList from "./RowList";

// interface FormWithFileInterface {
//     icon: IconProp,
// }

export type ExtFileType = File & {
    _id: string,
}


export default function ChatForm() {
    //state
    const [message, setMessage] = useState<{ message: string } | null>(null);
    // const [openenFiles, setOpenedFiles] = useState<boolean>(false);
    const [files, setFiles] = useState<ExtFileType[]>([]);
    const [initiateUplaod, setInitiateUpload] = useState<boolean>(false);
    const [uploadingFile, setUplaodingFile] = useState<ExtFileType | null>(null);

    //ref
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    //functions
    function handleFileUpdate(evt:React.ChangeEvent<HTMLInputElement>) {
        // setOpenedFiles(true);
        const file = evt.target.files && evt.target.files[0] as ExtFileType;

        if(file) {
            setFiles((prevValue) => {
                return [...prevValue, file]
            });
            // setUplaodingFile()
            // setFiles((prevValue) => {
            //     return [...prevValue, file];
            // })
        }
    };

    function defineFileType(file: ExtFileType) {
        // console.log(file);
        const filePath = window.URL.createObjectURL(file);

        if(file.type.includes("audio")) {
            return <audio className="form_chat__file" src={filePath} controls></audio>
        }

        if(file.type.includes("video")) {
            return <video className="form_chat__file" src={filePath} controls></video>
        }

        // if(file.type.includes("image")) {
        //     return <img className="form_chat__file" src={filePath}></img>
        // }
    } 

    return (
        <>
            <Form icon={faPaperPlane} onSubmit={(evt) => {
                evt.preventDefault();
                console.log(message);
            }} className="form_chat" isLoading={false} isSuccess={false} >
                <div className="chat__form-wrapper">
                    <button onClick={() => {
                        inputFileRef.current?.click();
                    }} type="button">
                        <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    <Input className="form_chat__input" name="message" placeholder="Введите сообщение" updateValue={setMessage} type="text" autoFocus ></Input>
                </div>
                <input accept=".png, .mp4, .mp3, .ogg, .wav, .m4v" onChange={handleFileUpdate} ref={inputFileRef} type="file"></input>
            </Form>

            {files.length > 0 && <Popup>
                <div className="popup_file__wrapper">
                    {!initiateUplaod ? <>
                        <RowList items={files} renderItem={(file) => {
                            return  <div>
                                <span>{file.name}</span>
                                <button onClick={() => {
                                    setFiles((prevValue) => {
                                        return prevValue.filter((prevFile) => {
                                            return prevFile.name !== file.name;
                                        })
                                    })
                                }}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            {defineFileType(file)}
                        </div>
                        }}>

                        </RowList>
                        <div>
                            <button onClick={() => {
                                inputFileRef.current?.click();
                            }}>
                                Добавить
                            </button>
                            <button onClick={() => {
                                // setOpenedFiles(false);
                                setFiles([]);
                            }}>Отменить</button>
                            <button onClick={() => {
                                setInitiateUpload(true);
                                setUplaodingFile(files[0]);
                            }}>Отправить</button>
                        </div>
                    
                    </>
                    :
                    <>
                        <span>{uploadingFile?.name}</span>
                        <progress max={100} value={36}></progress>
                        <span>1/6</span>
                        {/* <RowList items={files} renderItem={(file) => {
                            return  <div>
                                <span>{file.name}</span>
                                <progress max={100} value={36}></progress>
                            
                        </div>
                        }}>

                        </RowList> */}
                    </>}
                </div>
            </Popup>}
        </>
    )
}