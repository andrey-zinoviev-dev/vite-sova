import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "./ActionButton";

interface DeleteButtonProps {
  onClick: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <ActionButton className="button-action_svg button-action_delete" onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
    </ActionButton>
  );
}