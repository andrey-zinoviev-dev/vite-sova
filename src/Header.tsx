import "./Header.css"
// import { useAppSelector } from "./hooks";
import Logo from "./Logo";
import { Container } from "./Container";
import HeaderProfile from "./HeaderProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import { toggleMenu } from "./store/features/sideMenuSlice";

import PopupRight from "./PopupRight";
import SideBar from "./SideBar";
import { useState } from "react";

interface HeaderInterface {
    children: React.ReactNode | React.ReactNode[],
};

export default function Header({ children }: HeaderInterface) {
    //dispatch
    const dispatch = useAppDispatch();

    // const location = useLocation();

    

    //state
    const [openedSideMenu, setOpenedSideMenu] = useState<boolean>(false);

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__left-wrapper">
                            <Logo></Logo>
                            <h2>SOVA</h2>
                        </div>
                        {children}
                        <div className="header__right-wrapper">
                            <HeaderProfile></HeaderProfile>
                            {location.pathname.includes("lessons") && <button onClick={() => {
                                // dispatch(toggleMenu())
                                setOpenedSideMenu(!openedSideMenu);
                            }}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>}
                        </div>
                    </div>
                </Container>
            </header>
            {openedSideMenu && <PopupRight closePopup={() => {
                setOpenedSideMenu(false);
            }}>
                {/* <div className="popup__close-wrapper">
                <h3>{data.title}</h3>
 
                </div> */}
                {/* <button onClick={() => {
                    setOpenedSideMenu(false);
                    // dispatch(toggleMenu());
                }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button> */}
                <SideBar closeSide={() => {
                    setOpenedSideMenu(false);
                }}></SideBar>
            </PopupRight>}
        </>

    )
}