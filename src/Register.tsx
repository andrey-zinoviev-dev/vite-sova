import Form from "./Form";
import ErrorSpan from "./ErrorSpan";
import Input from "./Input";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useRegisterUserMutation } from "./store/features/apiSlice";
import { isFetchBaseQueryError } from "./helpers/rtkErrorHelper";
import { useAppSelector } from "./hooks";
export default function Register() {
    //redux
    const user = useAppSelector((state) => {
        return state.user;
    })
    console.log(user);
    //navigate
    const navigate = useNavigate();

    //RTK
    const [registerUser, {isLoading, isSuccess}] = useRegisterUserMutation();

    //state
    const [registerData, setRegisterData] = useState<{email: string, password: string, name: string}>({
        email: "",
        password: "",
        name: ""
    });
    const [error, setError] = useState<{message: string}>({message: ""});

    
    //functions
    function handleRegisterSubmit() {
        // !isSuccess ?  registerUser(registerData).unwrap()
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((error) => {
        //     // console.log(error);
        //     const errMsg = isFetchBaseQueryError(error) &&  error.data;
        //     setError(errMsg as {message: string});
        // })

        // :

        // navigate("/");
    };

    return (
        <>
            <Form isLoading={isLoading} isSuccess={isSuccess} className="" text="Зарегистрироваться">
                <ErrorSpan text={error.message} />
                {/* <Input type="email" updateValue={setRegisterData} name="email" placeholder="Почта"></Input> 
                <Input type="password" hidden updateValue={setRegisterData} name="password" placeholder="Пароль"></Input>
                <Input type="text" updateValue={setRegisterData} name="name" placeholder="Имя"></Input> */}
                <Link to="..">Есть учетная запись? Войдите!</Link>
            </Form>
        </>
    )
}