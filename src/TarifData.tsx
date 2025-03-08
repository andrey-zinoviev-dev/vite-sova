import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditWrapper from "./EditWrapper";
import { TarifInterface } from "./intefaces/intefaces";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeTarif } from "./store/features/newCourseFeature";
import { useAppDispatch } from "./hooks";
import ActionButton from "./ActionButton";
import "./TarifData.css";

interface TarifDataInterface {
  item: TarifInterface,
  tarifStart: string,
}

export default function TarifData({ item, tarifStart }: TarifDataInterface) {
  //dispatch
  const dispatch = useAppDispatch();

  //dates
  const startNormalized = new Date(tarifStart).toISOString();
  const endnormalized = new Date(item.end).toISOString();

  //functions
  function getFinalDate(date: string){
    const dateToFormat = new Date(date);
    return `${dateToFormat.getDate()}.${dateToFormat.getMonth() + 1}.${dateToFormat.getFullYear()}`;
  }

  return (
    <>
      <EditWrapper>
        <h3>{item.title}</h3>
        <ActionButton onClick={() => {
          dispatch(removeTarif(item._id))
        }}>
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
      </EditWrapper>
      <div className="tarif-start-end-wrapper">
        <span>Начадо доступа: {getFinalDate(startNormalized)}</span>
        <span>Конец доступа: {getFinalDate(endnormalized)}</span>
      </div>
    </>
  )
}