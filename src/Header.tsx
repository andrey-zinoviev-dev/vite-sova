import logo from "./assets/image 2.svg";
import "./Header.css"

export default function Header() {
    // const user = useAppSelector((state) => {
    //     return state.user;
    // });

    return (
        <header className="header">
            <img src={logo}></img>
            <button>Личный кабинет</button>
        </header>
    )
}