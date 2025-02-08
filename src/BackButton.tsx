import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import "./BackButton.css";

interface BackButtonInterface {
    text: string,
};

export default function BackButton({ text }: BackButtonInterface) {
    //navigate
    const navigate = useNavigate();

    return (
        <button className="button-back" onClick={() => {
            navigate(-1);
        }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            {text}
        </button>
    )
}