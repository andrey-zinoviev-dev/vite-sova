import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import "./BackButton.css";

interface BackButtonInterface {
    text: string,
    href?: string,
};

export default function BackButton({ text, href }: BackButtonInterface) {
    //navigate
    const navigate = useNavigate();

    return (
        <button className="button-back" onClick={() => {
            if(href) {
                navigate(href);
            } else {
                navigate(-1);
            }
        }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            {text}
        </button>
    )
}