import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useAppSelector } from "./hooks";

export default function HeaderProfile() {

    const user = useAppSelector((state) => {
        return state.user;
    });

    return (
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
    )
}