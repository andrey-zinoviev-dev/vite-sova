// import { Link, useNavigate } from "react-router";
import "./RowButton.css";

interface RowButtonInterface {
    handleClick?: () => void,
    children: React.ReactNode | React.ReactNode[],
    // to: string,
}


export default function RowButton({ handleClick, children }: RowButtonInterface) {
    //navigate
    // const navigate = useNavigate();

    return (
        <button onClick={handleClick && handleClick}>
            {children}
        </button>
    )
}