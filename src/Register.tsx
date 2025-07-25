import Form from "./Form";
import ErrorSpan from "./ErrorSpan";
import Input from "./Input";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useRegisterUserMutation } from "./store/features/apiSlice";
// import { isFetchBaseQueryError } from "./helpers/rtkErrorHelper";
import { useAppSelector } from "./hooks";

interface RegisterInterface {
    closePopup: () => void,
}

export default function Register({ closePopup }: RegisterInterface) {
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
        <Form className="welcome_form" onSubmit={(evt) => {
          evt.preventDefault();
        //   handleRegisterSubmit();
        }}>
          <ErrorSpan text={error.message} />
          <Input type="email" name="email" placeholder="Почта"></Input>
          <Input type="password" name="password" placeholder="Пароль"></Input>
          <Input type="text" name="name" placeholder="Имя"></Input>
          {/* <Link to="..">Есть учетная запись? Войдите!</Link> */}
        </Form>
      </>
    );
}