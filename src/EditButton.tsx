import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface EditButtonProps {
  onClick: () => void;
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <ActionButton className="button-action_svg button-action_edit" onClick={onClick}>
      <FontAwesomeIcon icon={faPen} />
    </ActionButton>
  );
}       