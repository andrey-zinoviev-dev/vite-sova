import { Outlet } from "react-router"
import Login from "./Login"
import "./Welcome.css"
export default function Welcome() {
    return (
        <section className="welcome">
            <h1>Sasha sova</h1>
            <p>Добро пожаловать в Школу Экстремального вокала Саши Совы.</p>
            <Outlet></Outlet>
        </section>
    )
};