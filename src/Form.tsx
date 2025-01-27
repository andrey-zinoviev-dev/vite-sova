interface FormInterface {
    submitFunction: () => void,
    text: string,
    children: React.ReactNode | React.ReactNode[],
    className: string,
    isLoading: boolean
}

export default function Form({className, submitFunction, text, children, isLoading}: FormInterface) {

    return (
        <form className={className} onSubmit={(evt) => {
            evt.preventDefault();
            submitFunction();
        }}>
            {children}
            <button style={{pointerEvents: isLoading ? "none" : "all"}} disabled={isLoading}>{text}</button>
        </form>
    )
}