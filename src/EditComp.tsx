import { ReactNode } from "react"
import Form from "./Form";
import "./EditComp.css"
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router";
interface EditComp {
    children: ReactNode | ReactNode[];
    submitFunction: () => void;
    formActionText: string;
}

export default function EditComp({children, submitFunction, formActionText}: EditComp) {
    const navigate = useNavigate();

    return (
        <Form className="edit-form" onSubmit={(evt) => {
            evt.preventDefault();
            submitFunction();
            // console.log("submit");
        }}>
            {children}
            <div className="edit-form-buttons">
                <button onClick={() => navigate(-1)}>Отменить</button>
                <ActionButton>{formActionText}</ActionButton>
            </div>
        </Form>
    )
}