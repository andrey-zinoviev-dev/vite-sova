import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ModuleExtInterface } from "./intefaces/intefaces"
import { faGear } from "@fortawesome/free-solid-svg-icons"
// import { Link } from "react-router"
import ActionButton from "./ActionButton"
import EditWrapper from "./EditWrapper"
import { useNavigate } from "react-router"
import CardHeadline from "./CardHeadline"
// import "./ModuleData.css"
interface ModuleDataInterface {
  courseTitle: string,
  item: ModuleExtInterface,
}

export default function ModuleData({ courseTitle, item }: ModuleDataInterface) {
  const navigate = useNavigate();

  return (
    <>
      {/* <div>
        <h4>{item.title}</h4>
        <Link onClick={(evt) => {
          evt.stopPropagation();
        }} to={`./edit/${item._id}}`}>
          <FontAwesomeIcon icon={faGears} />
        </Link>
      </div> */}
      <EditWrapper>
        {/* <h3>{item.title}</h3> */}
        <CardHeadline title={item.title}></CardHeadline>
        <ActionButton className="button-action_svg">
          <FontAwesomeIcon icon={faGear} />
        </ActionButton>
      </EditWrapper>
      <p>{item.description}</p>

      <span>Пройдено 0 из {item.lessons.length} уроков</span>
      <ActionButton
        disabled={!item.available}
        onClick={() => {
          navigate(`./${item._id}`, {state: {courseTitle: courseTitle}});
        }}
      >
        Открыть
      </ActionButton>
    </>
  );
}