import "./Input.css";

type InputBaseType<T> = React.ComponentPropsWithoutRef<"input"> & {
    updateValue: React.Dispatch<React.SetStateAction<T>>,
};

export default function Input<T>({ updateValue, ...props }: InputBaseType<T> ) {
    const { name, className, ...rest } = props;

    const classStr = 'input ' + (className || "");

    return (
        <input className={classStr} { ...rest } onChange={(evt) => {
            if(name) {
                updateValue((prevValue) => {
                    return {...prevValue, [name]: evt.target.value}
                })
            }
        }}>
        </input>
    )
}