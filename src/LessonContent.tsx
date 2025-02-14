import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import "./LessonContent.css"
export default function LessonContent() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Контент урока</h3>
            <div className="lesson__content">
                <h4>Обратите внимание на произношение сложных, парных согласных и продолжайте работать над песнями, исходя из этого. Песни на ваш выбор тоже можно, если нет проблем по работе с диапазоном.</h4>
                <img src="https://cdn.mohen-tohen.ru/IMG_20241127_232821_046.jpg"></img>
                <p>Вот тут еще текст</p>
                <img src="https://cdn.mohen-tohen.ru/56fa6f6622512890e8bc08085f65ad92.jpg"></img>
            </div>
            <button>
                Следующий урок
            </button>
            <button className="lesson__chat-button" onClick={() => {
                navigate("./chat")
            }}>
                <FontAwesomeIcon icon={faMessage} />
            </button>
        </>
    )
}