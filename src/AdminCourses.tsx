import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton";
import CourseCard from "./CourseCard";
import { useAppSelector } from "./hooks";
import TableComp from "./TableComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export default function AdminCourses() {
  const navigate = useNavigate();
  const userCourses = useAppSelector((state) => state.user.courses);
  //   console.log(userCourses);
  return (
    userCourses && (
      <TableComp
        items={userCourses}
        renderItem={(item) => {
          return (
            <li key={item._id}>
              <CourseCard item={item} isAdmin></CourseCard>
            </li>
          );
        }}
      >
        <ActionButton
          className="button-action_new"
          onClick={() => {
            navigate("addCourse");
          }}
        >
          Добавить курс
          <FontAwesomeIcon icon={faPlus} />
        </ActionButton>
      </TableComp>
    )
  );
}
