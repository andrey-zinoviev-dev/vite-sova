import { useState } from "react"
import { Link, useParams } from "react-router";
import "./Sidebar.css"
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModuleExtInterface } from "./store/features/courseSlice";
import RowList from "./RowList";
import RowButton from "./RowButton";

interface SideBarInterface {
    module: ModuleExtInterface,
};

export default function SideBar({ module }: SideBarInterface){
    const [ openedSideBar, setOpenedSideBar ] = useState<boolean>(false);
    const { courseId, moduleId } = useParams();

    return (
        <div className="sidebar">
            <div className="sidebar__left">
                <Logo></Logo>
                <button onClick={() => {
                    setOpenedSideBar(true);
                }}>Меню</button>
                <button>
                    <FontAwesomeIcon icon={faMessage} />
                </button>

            </div>

            {openedSideBar && <div className="sidebar__right">
                <div className="sidebar__right-navigation">
                    <div className="sidebar__right-close">
                        <h3>{module.title}</h3>
                        <button onClick={() => {
                            setOpenedSideBar(false);
                        }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <RowList items={module.lessons} renderItem={(item, index) => {
                        return <Link to={`../courses/${courseId}/modules/${moduleId}/lessons/${item._id}`} reloadDocument>
                            <RowButton item={item} index={index + 1} handleClick={() => {}}></RowButton>

                        </Link>
                    }}> 
                    </RowList>
                </div>
            </div>}
        </div>
    )
}