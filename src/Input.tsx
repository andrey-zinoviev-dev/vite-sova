type InputBaseType = React.ComponentPropsWithoutRef<"input">;

interface InputInterface<T> extends InputBaseType {
    updateValue: React.Dispatch<React.SetStateAction<T>>,
    // type: string,
    // focus?: boolean,
}

export default function Input<T>({ updateValue, ...props }: InputInterface<T> ) {
    const { name } = props;

    return (
        <input { ...props } onChange={(evt) => {
            name && updateValue((prevValue) => {
                return {...prevValue, [name]: evt.target.value}
            })
        }}>
        </input>
    )
}