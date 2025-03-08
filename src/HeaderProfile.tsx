import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
// import { useAppSelector } from "./hooks";
import { UserInterface } from "./store/features/userSlice";
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
import ActionButton from "./ActionButton";
import { useState } from "react";
import PopupRight from "./PopupRight";
import Login from "./Login";
import Welcome from "./Welcome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function HeaderProfile() {

    // const user = useAppSelector((state) => {
    //     return state.user;
    // });

    // const location = useLocation();
    

    const { data = {} as UserInterface} = useShowCurrentUserQuery();

    //state
    const [popupOpened, setPopupOpened] = useState<boolean>(false);

    //functions
    function closePopup() {
        setPopupOpened(false);
    }

    return (
        <>

            {data._id ? 
            <>
                <div className="header__notif-wrapper">
                    <FontAwesomeIcon icon={faBell} />
                    <span>3</span>
                </div>
                <Link to={"../profile"}><FontAwesomeIcon size="2x" icon={faUserCircle} />
                    <div className="header__user-wrapper">
                        <span>{data.name}</span>
                        <span className="header__user-wrapper-email">{data.email}</span>
                    </div>
                </Link>
            </>
            :
            <ActionButton onClick={() => {
                setPopupOpened(true);
            }}>
                Войти
            </ActionButton>
            }
            
            {popupOpened && <PopupRight closePopup={closePopup}>
                <Welcome closePopup={closePopup} />
            </PopupRight>}
        </>
    )
}