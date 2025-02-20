import { Link, Outlet, useLocation } from "react-router";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { useAppSelector } from "./hooks";
import Logo from "./Logo";
import { Container } from "./Container";

export default function Header() {
    const user = useAppSelector((state) => {
        return state.user;
    });

    const location = useLocation();

    return (
        <header className="header">
            <Container>
                <div className="header__content">
                    <div className="header__left-wrapper">
                        <Logo></Logo>
                        {/* {location.pathname.length >= 1 && !location.pathname.includes("modules") && <span>SOVA</span>} */}
                        {location.pathname.includes("modules") && <div className="header__search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <Input type="text" updateValue={() => {}} placeholder="Поиск урока"></Input>
                        </div>}
                        {location.pathname.includes("profile") && <h2>С возвращением, {user.email}!</h2>}
                    </div>
                    <div className="header__right-wrapper">
                        {/* <Outlet></Outlet> */}
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
                </div>
            </Container>
        </header>
    )
}