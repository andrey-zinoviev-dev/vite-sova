// import ActionButton from "./ActionButton";
// import Card from "./Card";
// import CardHeadline from "./CardHeadline";
// import { ModuleInterface, StreamInterface, TarifInterface } from "./intefaces/intefaces";
// // import EditWrapper from "./EditWrapper";
// import { LessonInterface, ModuleExtInterface } from "./intefaces/intefaces";
// import { StudentCourseInterface } from "./intefaces/intefaces";
// import { CourseInterface } from "./intefaces/intefaces";
// import EditButton from "./EditButton";
import TableElement from "./TableElement";
import CardHeadline from "./CardHeadline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLock } from "@fortawesome/free-solid-svg-icons";

interface CommonCardInterface {
  children?: React.ReactNode | React.ReactNode[];
  headlineComp?: React.ReactNode;
  title: string;
  onClick?: () => void;
  index?: string;
  isAdmin?: boolean;
}

export default function CommonCard
({
  children,
  title,
  onClick,
  index,
  isAdmin,
  headlineComp,
}: CommonCardInterface) {
  return (
    <TableElement>
      <CardHeadline title={index ? `${index.padStart(2, "0")}. ${title}` : title} isAdmin={isAdmin} onClick={onClick}>
        {headlineComp}
      </CardHeadline>
      {children}
      {/* <ActionButton disabled={!item.available} onClick={onClick}>
        {item.available ? <span>Открыть</span> : <span>Недоступно <FontAwesomeIcon icon={faLock} /></span>}
      </ActionButton> */}
    </TableElement>
  );
}
