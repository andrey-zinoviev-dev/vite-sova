import Form from "./Form";

import "./FormWithFile.css"


interface FormWithFileInterface {
    children: React.ReactNode | React.ReactNode[],
}


export default function FormWithFile({ children }: FormWithFileInterface) {
    return (
        <Form className="form_file" isLoading={false} isSuccess={false} submitFunction={() => {
            // evt.preventDefault();
            console.log("send msg here");
        }}>
            {children}
            <input type="file"></input>
        </Form>
    )
}