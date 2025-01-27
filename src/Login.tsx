import Form from "./Form";
import Input from "./Input";
// import "./Login.css";
import { useLoginUserMutation } from "./store/features/apiSlice";
import { errorWithMessage, isFetchBaseQueryError } from "./helpers/rtkErrorHelper";
import { useEffect, useState } from "react";
import ErrorSpan from "./ErrorSpan";
import { Link } from "react-router";

export default function Login() {
    //RTK
    const [submitLoginFunction, {isLoading}] = useLoginUserMutation();
    const [error, setError] = useState<{message: string}>({message: ""});

    //state
    const [logindData, setLoginData] = useState<{email: string, password: string}>({
        email: "",
        password: "",
    });
    //functions
    
    function submitLogin() {

        submitLoginFunction(logindData).unwrap()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            const errMsg = isFetchBaseQueryError(error) &&  error.data;
            setError(errMsg as {message: string});
        })
    };

    return (
        <>
            <Form isLoading={isLoading} className="welcome__form" submitFunction={submitLogin} text="Войти">
                <ErrorSpan text={error.message} />
                <Input type="email" updateValue={setLoginData} name="email" placeholder="Почта"></Input> 
                <Input type="password" updateValue={setLoginData} name="password" placeholder="Пароль"></Input>
                <Link to="./register">Нет учетной записи? Зарегистрируйтесь!</Link>
            </Form>
        </>
    )
}