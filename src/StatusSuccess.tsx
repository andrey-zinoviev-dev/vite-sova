import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StatusSuccess.css";
interface StatusSuccessProps {
  text: string;
}

export default function StatusSuccess({ text }: StatusSuccessProps) {
  return (
    <div className="status-success">
        <FontAwesomeIcon icon={faCheck} />
        <span>{text}</span>
    </div>
  );
}