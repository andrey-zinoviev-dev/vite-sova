// import { Link, useNavigate } from "react-router";
import { ComponentPropsWithoutRef } from "react";
import "./RowButton.css";

type RowButtonType = ComponentPropsWithoutRef<"button"> & {
    children:  React.ReactNode | React.ReactNode[],
    // className?: string,
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
    const { className, ...rest } = props;
    const buttonClass = "button-row " + (className || "");
    
    //navigate
    // const navigate = useNavigate();

    return (
      // <button className={buttonClass} {...rest}>
      //     {children}
      // </button>
      <button className={buttonClass} {...rest}>
        {children}
      </button>
    );
}