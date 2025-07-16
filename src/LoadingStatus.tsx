import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./Status";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";



export default function LoadingStatus() {
  return <Status>Загрузка... <FontAwesomeIcon icon={faCircleNotch} spin /></Status>;
}