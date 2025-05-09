import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
// import { useAppSelector } from "./hooks";
import { UserInterface } from "./store/features/userSlice";
import { useShowCurrentUserQuery } from "./store/features/apiSlice";
import ActionButton from "./ActionButton";
import { useState } from "react";
import PopupRight from "./PopupRight";
// import Login from "./Login";
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
        {data._id ? (
          <>
            <Link className="profile-link" to={"../profile"}>
              <FontAwesomeIcon size="2x" icon={faUserCircle} />
              <span>{data.name}</span>

              {/* <div className="header__user-wrapper">
                        <span className="header__user-wrapper-email">{data.email}</span>
                    </div> */}
            </Link>
          </>
        ) : (
          <ActionButton
            onClick={() => {
              setPopupOpened(true);
            }}
          >
            Войти
          </ActionButton>
        )}

        {popupOpened && (
          <PopupRight closePopup={closePopup}>
            <Welcome closePopup={closePopup} />
          </PopupRight>
        )}
      </>
    );
}