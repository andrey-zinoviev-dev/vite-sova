import logo from "./assets/image 2.svg";
import { useAppSelector } from "./hooks";

export default function Header() {
    // const user = useAppSelector((state) => {
    //     return state.user;
    // });

    return (
        <header>
            <img src={logo}></img>
            <button>Личный кабинет</button>
        </header>
    )
}