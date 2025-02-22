import Form from "./Form";
import Input from "./Input";

interface AddCourseStepInteface {
    children: React.ReactNode[]
}

export default function AddCourseStep({ children }: AddCourseStepInteface) {
    return (
       <Form text="Продолжить" isLoading={false} isSuccess={false} className="">
            {children}
            {/* <Input updateValue={() => {}}></Input> */}
       </Form>
    )
};