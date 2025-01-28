interface FormInterface {
    submitFunction: () => void,
    text: string,
    children: React.ReactNode | React.ReactNode[],
    className: string,
    isLoading: boolean,
    isSuccess: boolean,
}

export default function Form({className, submitFunction, text, children, isLoading, isSuccess}: FormInterface) {
    return (
        <form className={className} onSubmit={(evt) => {
            evt.preventDefault();
            submitFunction();
        }}>
            {children}
            <button style={{pointerEvents: isLoading ? "none" : "all"}} disabled={isLoading}>{isSuccess ? "Успешно" : text}</button>
        </form>
    )
}