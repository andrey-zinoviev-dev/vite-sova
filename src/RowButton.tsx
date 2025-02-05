import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import "./RowButton.css";
// import { useNavigate } from "react-router";

interface RowButtonInterface<T> {
    item: T,
    index: number,
    handleClick: (item: T) => void,
}


export default function RowButton<T extends {title: string}>({item, index, handleClick}: RowButtonInterface<T>) {
    // const navigate = useNavigate();

    return (
        <button onClick={() => {
            handleClick(item);
        }} className="button-row">
            <div className="button-row__title-wrapper">
                <span className="button-row__index">0{index}.</span>
                <span>{item.title}</span>
            </div>
            <div className="button-row__svg-wrapper">
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </button>
    )
}