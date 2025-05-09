import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
// import PopupRight from "./PopupRight";
// import Label from "./Label";
// import Input from "./Input";
import { 
    // addLesson, 
    removeModule } from "./store/features/newCourseFeature";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
//   faPlusCircle,
  faTrash,
//   faPlus,
} from "@fortawesome/free-solid-svg-icons";
import EditWrapper from "./EditWrapper";
import ActionButton from "./ActionButton";
// import PopupRight from "./PopupRight";
// import NewModule from "./NewModule";
import NewLesson from "./NewLesson";
import NewModule from "./NewModule";
// import RowList from "./RowList";
// import RowButton from "./RowButton";

interface ModulesInterface {
    headline: string
}

export default function AddCourseModules({ headline }: ModulesInterface) {
  const newModules = useAppSelector((state) => {
    return state.newCourse.modules;
  });

  //state
  const [moduleId, setModuleId] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  // console.log(moduleId);

  return (
    <>
      {/* <h2>Модули курса</h2> */}

      {/* <NewModule></NewModule> */}

      {/* {newModules.length > 0 &&  */}
      <h2>{headline}</h2>

      <NewModule></NewModule>

      <TableComp
        items={newModules}
        renderItem={(item) => {
          // console.log(item.lessons);
          return (
            <TableElement>
              <>
                <EditWrapper>
                  <h3>{item.title}</h3>
                  <ActionButton
                    onClick={() => {
                      if (item._id) {
                        dispatch(removeModule(item._id));
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </ActionButton>
                </EditWrapper>
                <div>
                  <p>{item.description}</p>

                  <span>Уроки: {item.lessons.length}</span>
                </div>
              </>
            </TableElement>
          );
        }}
      ></TableComp>
    </>
  );
}
