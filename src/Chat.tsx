import { useNavigate } from "react-router"
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css"
import RowList from "./RowList";
import RowButton from "./RowButton";
import LessonButton from "./LessonButton";
export default function Chat() {
    const navigate = useNavigate();

    const testItems  = [
        {
            title: "Сергей",
            _id: "1"
        },
        {
            title: "Андрей",
            _id: "2"
        },
        {
            title: "Алина",
            _id: "3"
        },
        {
            title: "Селина",
            _id: "4"
        }
    ]

    return (
        <>
            <h3>Чат</h3>
            <div className="chat">
                <div>
                <RowList items={testItems} renderItem={(item, index) => {
                    return <LessonButton item={item} index={index + 1} available={true} handleClick={() => {
                        console.log(item);
                    }}></LessonButton>
                }}></RowList>
                </div>

                <div className="chat__right-wrapper">
                    <Form className="" submitFunction={() => {}} text="Отправить сообщение" isLoading={false} isSuccess={false}>
                        <input></input>
                    </Form>
                </div>
            </div>
        </>
    )
}