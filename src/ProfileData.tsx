import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import ProfileStats from "./ProfileStats";
import { useNavigate } from "react-router";
import { useAppSelector } from "./hooks";
import "./ProfileData.css"
import TableComp from "./TableComp";
import TableProfleCourseData from "./TableProfileCourseData";
import { StudentCourseInterface } from "./intefaces/intefaces";
import TableElement from "./TableElement";

export default function ProfileData() {
    //navigate
    const navigate = useNavigate();

    const userCourses = useAppSelector((state) => {
        return state.user.courses;
    });

    // console.log(userCourses);

    const profileCourses = userCourses.map((course) => {
        return course.course;
    }) as StudentCourseInterface[];

    const tarifs = userCourses.map((course) => {
        return course.tarif;
    }) as string[];

    // const userTarifs

    return (
        <div className="profile-data">
            <div className="profile-data__courses-wrapper">
                <h2 className="profile-data__headline">Ваши курсы</h2>
                <button className="profile-data__addCourse-button" onClick={() => {
                    navigate(`./addCourse`);
                }}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <span>Добавить новый курс</span>
                </button>
            </div>
            <TableComp items={profileCourses} renderItem={(item, index) => {
                const tarif = tarifs[index];
                
                return <TableElement>
                    <TableProfleCourseData item={item} tarif={tarif} />
                </TableElement>
                // return <TableButton onClick={() => {
                //     navigate(`../courses/${item._id}/modules`)
                // }}>
                //     <TableProfleCourseData item={item} />
                // </TableButton>
            }}></TableComp>
        </div>

    )
}