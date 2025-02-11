import { useState } from "react"
import { Link, useParams } from "react-router";
import "./Sidebar.css"
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";
import RowList from "./RowList";
import RowButton from "./RowButton";
import NavigationModule from "./NavigationModule";
import LessonButton from "./LessonButton";
import NavigationLink from "./NavigationLink";

interface SideBarInterface {
    course: CourseInterface,
    module: ModuleExtInterface,
};

export default function SideBar({ course }: SideBarInterface){

    const [ openedSideBar, setOpenedSideBar ] = useState<boolean>(false);

    // const { courseId } = useParams();

    // console.log(course);

    return (
        <div className="sidebar">
            <div className="sidebar__left">
                <Logo></Logo>
                <button onClick={() => {
                    setOpenedSideBar(true);
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className="sidebar__chat-btn">
                    <FontAwesomeIcon icon={faMessage} />
                </button>

            </div>

            {openedSideBar && <div className="sidebar__right">
                <div className="sidebar__right-navigation">
                    <div className="sidebar__right-close">
                        <h3>{course.title}</h3>
                        <button onClick={() => {
                            setOpenedSideBar(false);
                        }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    {course.modules && <RowList items={course.modules} renderItem={(item) => {
                        return <NavigationModule module={item}>
                            <RowList items={item.lessons} renderItem={(lesson, index) => {
                                return <NavigationLink to={`../courses/${course._id}/modules/${item._id}/lessons/${lesson._id}`}>
                                    <LessonButton item={lesson} index={index + 1}></LessonButton>
                                </NavigationLink>
                            }}></RowList>
                        </NavigationModule>
                    }}>
                    </RowList>}
                </div>
            </div>}
        </div>
    )
}