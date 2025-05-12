import { useState } from "react";
import ActionButton from "./ActionButton";
import {
  // useAppDispatch,
  useAppSelector,
} from "./hooks";
import NewLesson from "./NewLesson";
import RowList from "./RowList";
import TableComp from "./TableComp";
import TableElement from "./TableElement";
// import PopupRight fzrom "./PopupRight";
import RowButton from "./RowButton";
import Popup from "./Popup";
// import EditWrapper from "./EditWrapper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGear, faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ModulesInterface {
  headline: string;
}

export default function AddCourseLessons({ headline }: ModulesInterface) {
  const modules = useAppSelector((state) => {
    return state.newCourse.modules;
  });

  //dispatch
  // const dispatch = useAppDispatch();

  //state
  const [selectedModule, setSelectedModule] = useState<{
    title: string;
    _id: string;
  } | null>(null);

  //functions
  function closePopup() {
    setSelectedModule(null);
  }

  return (
    <>
      {/* <h2>Вот тут будет форма добавления уроков в модули</h2> */}
      <div className="newItem__wrapper">
        <h2>{headline}</h2>

        <TableComp
          items={modules}
          renderItem={(item) => {
            return (
              <TableElement>
                <>
                  <h3>{item.title}</h3>
                  {/* <span>Уроки: {item.lessons.length}</span> */}
                  {item.lessons.length > 0 ? (
                    <RowList
                      items={item.lessons}
                      renderItem={(item) => {
                        return (
                          <RowButton>
                            <span>{item.title}</span>

                            {/* <EditWrapper>
                                        <span>{item.title}</span>
                                        <ActionButton>
                                            <FontAwesomeIcon icon={faPen} />
                                        </ActionButton>
                                        <ActionButton>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </ActionButton>
                                    </EditWrapper> */}
                          </RowButton>
                        );
                      }}
                    ></RowList>
                  ) : (
                    <span>Уроков в модуле нет</span>
                  )}
                  <ActionButton
                    onClick={() => {
                      setSelectedModule({ title: item.title, _id: item._id });
                    }}
                  >
                    Добавить урок
                  </ActionButton>
                </>
              </TableElement>
            );
          }}
        ></TableComp>
        {selectedModule?._id && (
          <Popup closePoup={() => {}}>
            <NewLesson
              closePopup={closePopup}
              moduleId={selectedModule._id}
            ></NewLesson>
          </Popup>
          // <PopupRight closePopup={closePopup}>
          //   <NewLesson
          //     closePopup={closePopup}
          //     moduleId={selectedModule._id}
          //   ></NewLesson>
          // </PopupRight>
        )}
      </div>
    </>
  );
}
