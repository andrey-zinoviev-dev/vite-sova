import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FormType = React.ComponentPropsWithoutRef<"form"> & {
    submitFunction: () => void,
    text?: string,
    children: React.ReactNode | React.ReactNode[],
    className: string,
    isLoading: boolean,
    isSuccess: boolean,
    icon? : IconProp,
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

export default function Form({children, isLoading, isSuccess, icon, text, submitFunction, ...props }: FormType) {

    const { className, onSubmit, ...rest } = props;

    const classStr = "form " + (className || "");


    return (
        <form className={classStr} onSubmit={(evt) => {
            evt.preventDefault();
            submitFunction();
        }} {...rest}>
            {children}
            <button style={{pointerEvents: isLoading ? "none" : "all"}} disabled={isLoading}>{isSuccess ? "Успешно" : icon ? <FontAwesomeIcon icon={icon} /> : text}</button>
        </form>
    )
}