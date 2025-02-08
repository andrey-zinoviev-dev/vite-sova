import { useState } from "react"
import "./Sidebar.css"
import { createPortal } from "react-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export default function SideBar(){
    const [ openedSideBar, setOpenedSideBar ] = useState<boolean>(false);

    return (
        <div className="sidebar">
            <div className="sidebar__left">
                <Logo></Logo>
                <button>
                    <FontAwesomeIcon icon={faMessage} />
                </button>
                <button onClick={() => {
                    setOpenedSideBar(true);
                }}>Меню</button>
            </div>

            {openedSideBar && <div className="sidebar__right">
                <button onClick={() => {
                    setOpenedSideBar(false);
                }}>
                    Закрыть
                </button>
                <h3>Боковое меню</h3>
            </div>}
        </div>
    )
}