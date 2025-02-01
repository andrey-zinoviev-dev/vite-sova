import { Link } from "react-router";
import logo from "./assets/image 2.svg";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { useAppSelector } from "./hooks";

export default function Header() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
        <header className="header">
            <div className="header__left-wrapper">
                <img className="header__logo" src={logo}></img>
                <div className="header__search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <Input type="text" updateValue={() => {}} placeholder="Поиск курса"></Input>
                </div>
            </div>
            <div className="header__right-wrapper">
                <div className="header__notif-wrapper">
                    <FontAwesomeIcon icon={faBell} />
                    <span>3</span>
                </div>
                <Link to={"../profile"}><FontAwesomeIcon size="2x" icon={faUserCircle} />
                    <div className="header__user-wrapper">
                        <span>{user.name}</span>
                        <span className="header__user-wrapper-email">{user.email}</span>
                    </div>
                </Link>
            </div>

        </header>
    )
}