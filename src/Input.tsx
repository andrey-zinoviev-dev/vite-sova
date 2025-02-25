import "./Input.css";

type InputBaseType = React.ComponentPropsWithRef<"input"> 
// & {
//     updateValue: React.Dispatch<React.SetStateAction<T>>,
// };

export default function Input({ ...props }: InputBaseType ) {
    const { className, ...rest } = props;

    const classStr = 'input ' + (className || "");

    return (
        <input className={classStr} { ...rest }>
        </input>
    )
}