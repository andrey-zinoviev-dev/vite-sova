
import "./Welcome.css"
import { useState } from "react"
import Login from "./Login";
import Register from "./Register";


interface WelcomeInterface {
    closePopup: () => void,
};

export default function Welcome({ closePopup }: WelcomeInterface) {
    // const navigate = useNavigate();
    const [loginMode, setLoginMode] = useState<boolean>(true);

    return (
        <section className="welcome">
            <h1>Привет!</h1>
            <p>Добро пожаловать в Школу Экстремального вокала Саши Совы.</p>

            {loginMode ? <Login closePopup={closePopup} /> : <Register closePopup={closePopup} />}
            <span className="welcome__span-mode">{loginMode ? "Нет учетной записи?" : "Есть учетная запись?" }
                <button className="welcome__mode-btn" onClick={() => {
                setLoginMode(!loginMode);
            }}>{loginMode ? "Зарегистрируйтесь" : "Войдите"}</button>
            </span>
        </section>
    )
};