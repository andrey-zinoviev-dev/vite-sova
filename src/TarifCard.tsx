// import Card from "./Card";
// import CardHeadline from "./CardHeadline";
import { TarifInterface } from "./intefaces/intefaces";
import ActionButton from "./ActionButton";
import TableElement from "./TableElement";
export default function TarifCard({ item }: { item: TarifInterface }) {
  const endDate = new Date(item.endDate).toLocaleDateString();

  return <TableElement>
    <span>Доступ заканчивается: {endDate}</span>
    <ActionButton className="button-action_delete">
        Удалить тариф
    </ActionButton>
  </TableElement>
}
