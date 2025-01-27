type InputBaseType = React.ComponentPropsWithoutRef<"input">;

interface InputInterface<T> extends InputBaseType {
    updateValue: React.Dispatch<React.SetStateAction<T>>,
    type: string,
}

export default function Input<T>({ placeholder, type, name, updateValue}: InputInterface<T> ) {
    return (
        <input type={type} placeholder={placeholder} onChange={(evt) => {
            name && updateValue((prevValue) => {
                return {...prevValue, [name]: evt.target.value}
            })
        }}>
        </input>
    )
}