// import { useNavigate } from "react-router"
// import Form from "./Form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css"
import RowList from "./RowList";
// import RowButton from "./RowButton";
// import LessonButton from "./LessonButton";
import ContactButton from "./ContactButton";
import { UserInterface } from "./store/features/userSlice";
// import Input from "./Input";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ChatForm from "./ChatForm";
export default function Chat() {
    // const navigate = useNavigate();
    //state
    const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);

    const testItems  = [
        {
            name: "Сергей",
            _id: "1"
        },
        {
            name: "Андрей",
            _id: "2"
        },
        {
            name: "Алина",
            _id: "3"
        },
        {
            name: "Селина",
            _id: "4"
        }
    ] as UserInterface[]

    return (
        <>
            {/* <h3>Чат</h3> */}
            <div className="chat">
                <RowList items={testItems} renderItem={(item) => {
                    return <ContactButton active={item._id === selectedUser?._id} handleClick={() => {
                        setSelectedUser(item);
                    }} contact={item}></ContactButton>
                }}></RowList>
                <div className="chat__right-wrapper">
                    {
                        !selectedUser ? <>
                            {/* <div></div> */}
                            <span className="chat__selectect-initial-span">Выберите, кому написать</span>
                        </>
                        :
                        <>
                            <div className="chat__contact-selected">
                                <img className="contact-button__img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"></img>
                                <span>{selectedUser.name}</span>
                            </div>
                            <span className="chat__selectect-initial-span">Сообщений нет</span>
                            <ChatForm />
                        </>
                    }

                    
                </div>
            </div>
        </>
    )
}