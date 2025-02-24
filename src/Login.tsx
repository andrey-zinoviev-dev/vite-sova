import Form from "./Form";
import Input from "./Input";
// import "./Login.css";
import { useLoginUserMutation } from "./store/features/apiSlice";
import { isFetchBaseQueryError } from "./helpers/rtkErrorHelper";
import { useState } from "react";
import ErrorSpan from "./ErrorSpan";
import { Link, useNavigate } from "react-router";

// import "./Login.css";

export default function Login() {
    //navigate
    const navigate = useNavigate();
    //RTK
    const [submitLoginFunction, {isLoading, isSuccess}] = useLoginUserMutation();
    const [error, setError] = useState<{message: string}>({message: ""});

    //state
    const [logindData, setLoginData] = useState<{email: string, password: string}>({
        email: "",
        password: "",
    });
    //functions
    function submitLogin() {

        submitLoginFunction(logindData).unwrap()
        .then(() => {
            navigate("/profile");
        })
        .catch((error) => {
            const errMsg = isFetchBaseQueryError(error) &&  error.data;
            setError(errMsg as {message: string});
        })
    };

    return (
       
            <Form onSubmit={(evt) => {
                evt.preventDefault();
                submitLogin();
            }} isSuccess={isSuccess} isLoading={isLoading} className="" text="Войти">
                <ErrorSpan text={error.message} />
                {/* <Input type="email" updateValue={setLoginData} name="email" placeholder="Почта"></Input> 
                <Input type="password" updateValue={setLoginData} name="password" placeholder="Пароль"></Input> */}
                <Link to="./register">Нет учетной записи? Зарегистрируйтесь!</Link>
            </Form>
       
    )
}