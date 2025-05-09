import Form from "./Form";
import Input from "./Input";
// import "./Login.css";
import { useLoginUserMutation } from "./store/features/apiSlice";
import { isFetchBaseQueryError } from "./helpers/rtkErrorHelper";
import { useState } from "react";
import ErrorSpan from "./ErrorSpan";
import { Link, useNavigate } from "react-router";
import ActionButton from "./ActionButton";

// import "./Login.css";

interface LoginInterface {
    closePopup: () => void,
}

export default function Login({ closePopup }: LoginInterface) {
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
            closePopup()
            // navigate("/profile");
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
            }} className="">
                <ErrorSpan text={error.message} />
                <Input type="email" onChange={(evt) => {
                    setLoginData((prevValue) => {
                        return {...prevValue, email: evt.target.value}
                    })
                }} name="email" placeholder="Почта"></Input> 
                <Input type="password" onChange={(evt) => {
                    setLoginData((prevValue) => {
                        return {...prevValue, password: evt.target.value}
                    })
                }} name="password" placeholder="Пароль"></Input>
                <ActionButton>Войти</ActionButton>
                {/* <Link to="./register">Нет учетной записи? Зарегистрируйтесь!</Link> */}
            </Form>
       
    )
}