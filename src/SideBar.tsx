import { useState } from "react"
import { useNavigate } from "react-router";
import "./Sidebar.css"
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CourseInterface, ModuleExtInterface } from "./store/features/courseSlice";
import RowList from "./RowList";
// import RowButton from "./RowButton";
import NavigationModule from "./NavigationModule";
import LessonButton from "./LessonButton";
// import NavigationLink from "./NavigationLink";

interface SideBarInterface {
    course: CourseInterface,
    module: ModuleExtInterface,
    closeSide: () => void,
};

export default function SideBar({ course, closeSide }: SideBarInterface){

    //state
    // const [ openedSideBar, setOpenedSideBar ] = useState<boolean>(false);

    //navigate
    const navigate = useNavigate();

    //functions
    function closeAndNavigate(link: string) {
        navigate(link);
        closeSide();
        // setOpenedSideBar(false);
    }

    return (
        // <div className="sidebar">
        //     <div className="sidebar__right">
        //         <div className="sidebar__right-navigation">
        //             <div className="sidebar__right-close">
        //                 <h3>{course.title}</h3>
        //                 <button onClick={() => {
        //                     // setOpenedSideBar(false);
        //                 }}>
        //                     <FontAwesomeIcon icon={faXmark} />
        //                 </button>
        //             </div>
        //             {course.modules && <RowList items={course.modules} renderItem={(item) => {
        //                 return <NavigationModule module={item}>
        //                     <RowList items={item.lessons} renderItem={(lesson, index) => {
        //                         return <LessonButton item={lesson} index={index + 1} handleClick={() => {
        //                             console.log('navigate to lesson');
        //                             // closeAndNavigate(`../courses/${course._id}/modules/${item._id}/lessons/${lesson._id}`);
        //                         }} available={lesson.available}></LessonButton>
        //                     }}></RowList>
        //                 </NavigationModule>
        //             }}>
        //             </RowList>}
        //         </div>
        //     </div>
        // </div>
        <div className="sidebar__right">
            {/* <div className="sidebar__right-close">

                </div> */}
                {course.modules && <RowList items={course.modules} renderItem={(item) => {
                    return <NavigationModule module={item}>
                        <RowList items={item.lessons} renderItem={(lesson, index) => {
                            return <LessonButton item={lesson} index={index + 1} handleClick={() => {
                                // console.log('navigate to lesson');
                                closeAndNavigate(`../courses/${course._id}/modules/${item._id}/lessons/${lesson._id}`);
                            }} available={lesson.available}></LessonButton>
                        }}></RowList>
                    </NavigationModule>
                }}>
                </RowList>}
            {/* <div className="sidebar__right-navigation">
                <div className="sidebar__right-close">
                    <h3>{course.title}</h3>
                    <button onClick={() => {
                        // setOpenedSideBar(false);
                    }}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                {course.modules && <RowList items={course.modules} renderItem={(item) => {
                    return <NavigationModule module={item}>
                        <RowList items={item.lessons} renderItem={(lesson, index) => {
                            return <LessonButton item={lesson} index={index + 1} handleClick={() => {
                                console.log('navigate to lesson');
                                // closeAndNavigate(`../courses/${course._id}/modules/${item._id}/lessons/${lesson._id}`);
                            }} available={lesson.available}></LessonButton>
                        }}></RowList>
                    </NavigationModule>
                }}>
                </RowList>}
            </div> */}
        </div>
    )
}