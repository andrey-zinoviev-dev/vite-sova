// import { useNavigate } from "react-router"
import Form from "./Form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css"
import RowList from "./RowList";
// import RowButton from "./RowButton";
// import LessonButton from "./LessonButton";
import ContactButton from "./ContactButton";
import { UserInterface } from "./store/features/userSlice";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
            <h3>Чат</h3>
            <div className="chat">
                <RowList items={testItems} renderItem={(item, index) => {
                    return <ContactButton handleClick={() => {
                        setSelectedUser(item);
                    }} contact={item}></ContactButton>
                }}></RowList>
                <div className="chat__right-wrapper">
                    {
                        !selectedUser ? <>
                            <span>Выберите, кому написать</span>
                        </>
                        :
                        <>
                            <div>
                                <span>{selectedUser.name}</span>
                            </div>
                            <form onSubmit={(evt) => {
                                evt.preventDefault();
                            }}>
                                <textarea />
                                <button>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </form>
                        </>
                    }

                    {/* <Form className="" submitFunction={() => {}} text="Отправить сообщение" isLoading={false} isSuccess={false}>
                        <Input type="text" updateValue={() => {}} />
                    </Form> */}
                </div>
            </div>
        </>
    )
}