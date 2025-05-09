// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css'

type FormType = React.ComponentPropsWithoutRef<"form"> & {
    // submitFunction: () => void,
    // text?: string,
    children: React.ReactNode | React.ReactNode[],
    className: string,
    // isLoading: boolean,
    // isSuccess: boolean,
    // icon? : IconProp,
};

// interface FormInterface {
//     submitFunction: () => void,
//     text?: string,
//     children: React.ReactNode | React.ReactNode[],
//     className: string,
//     isLoading: boolean,
//     isSuccess: boolean,
//     icon? : IconProp,
// }

export default function Form({children, ...props }: FormType) {

    const { className, ...rest } = props;

    const classStr = "form " + (className || "");

    return (
        <form className={classStr} {...rest}>
            {children}
            {/* <button style={{pointerEvents: isLoading ? "none" : "all"}} disabled={isLoading}>{isSuccess ? "Успешно" : icon ? <FontAwesomeIcon icon={icon} /> : text}</button> */}
        </form>
    )
}