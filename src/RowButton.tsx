// import { Link, useNavigate } from "react-router";
import { ComponentPropsWithoutRef } from "react";
import "./RowButton.css";

type RowButtonType = ComponentPropsWithoutRef<"button"> & {
    children:  React.ReactNode | React.ReactNode[],
}

// interface RowButtonInterface {
//     handleClick?: () => void,
//     children: React.ReactNode | React.ReactNode[],
//     className: string,
//     // disabled: boolean,
//     // opened: boolean,
//     // to: string,
// }


export default function RowButton({ children, ...props }: RowButtonType) {
    const { className } = props;
    const buttonClass = "button-row " + (className || "");
    //navigate
    // const navigate = useNavigate();

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    )
}