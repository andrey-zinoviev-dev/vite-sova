import { Outlet } from "react-router"

import "./Welcome.css"




export default function Welcome() {
    // const navigate = useNavigate();


    return (
        <section className="welcome">
            <h1>Sasha sova</h1>
            <p>Добро пожаловать в Школу Экстремального вокала Саши Совы.</p>
            <Outlet></Outlet>
        </section>
    )
};