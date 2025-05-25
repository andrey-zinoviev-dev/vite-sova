// import CardHeadline from "./CardHeadline";
import ActionButton from "./ActionButton";
import EditButton from "./EditButton";
import EditWrapper from "./EditWrapper";
import { CourseInterface, TarifInterface } from "./intefaces/intefaces";

interface AdminCardInterface<T> {
  item: T,
}

export default function AdminCard<T extends CourseInterface | TarifInterface>({ item }: AdminCardInterface<T>) {
  return (
    <>
      <EditWrapper>
        {/* <CardHeadline title={item.title}></CardHeadline> */}
        <h3>{item.title}</h3>
        <EditButton
          onClick={() => {
            console.log("редактировать курс");
            // navigate(`/courses/${item._id}/edit/general`);
          }}
        />
      </EditWrapper>
      <p>Описание курса</p>
      <ActionButton
        onClick={() => {
          console.log("продолжить курс");
          // navigate(`/courses/${item._id}/modules`);
        }}
      >
        <span>Продолжить</span>
      </ActionButton>
    </>
  );
}