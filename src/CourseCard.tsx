import ActionButton from "./ActionButton";
// import Card from "./Card";
import { StudentCourseInterface } from "./intefaces/intefaces";
import { useNavigate } from "react-router";
// import TableElement from "./TableElement";
// import CommonCard from "./CommonCard";
// import EditWrapper from "./EditWrapper";
// import EditButton from "./EditButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Highlight from "./Highlight";
// import TableElement from "./TableElement";
import CommonCard from "./CommonCard";
// import CardHeadline from "./CardHeadline";
// import CardHeadline from "./CardHeadline";
// import Highlight from "./Highlight";
interface CourseCardInterface {
  item: StudentCourseInterface;
  isAdmin: boolean;
}

export default function CourseCard({ item, isAdmin }: CourseCardInterface) {
  const navigate = useNavigate();

  return (
    <CommonCard
      // item={item}
      title={item.title}
      isAdmin={isAdmin}
      onClick={() => {
        navigate(`/courses/${item._id}/edit/general`);
      }}
      headlineComp={
        <Highlight>
          <span>Тариф: {item.tarif}</span>
        </Highlight>
      }
    >
      <p className="button-table__desc">{item.description}</p>
      <ActionButton
        onClick={() => {
          navigate(`/courses/${item._id}/modules`);
        }}
      >
        <span>Открыть</span>
      </ActionButton>
    </CommonCard>
  );
}
