import { useParams } from "react-router";
// import EditComp from "./EditComp";
import { ModuleExtInterface } from "./intefaces/intefaces";
import { useShowCurrentModuleQuery } from "./store/features/apiSlice";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";

export default function ModuleEdit() {
    const { moduleId } = useParams();
    // console.log(moduleId);

    const { data = {} as ModuleExtInterface } = useShowCurrentModuleQuery({moduleId: moduleId});

    return (
      <>
        {data._id && (
          <Form
            className=""
            // isLoading={false}
            // isSuccess={false}
            // text={`Обновить ${data.title}`}
            onSubmit={(evt) => {
                evt.preventDefault();
                // console.log("submit");
            }}
          >
            <Label>
              <Input
                placeholder="Название модуля"
                defaultValue={data.title}
              ></Input>
            </Label>
            <Label>
              <Input
                placeholder="Описание модуля"
                defaultValue={data.description}
              ></Input>
            </Label>
          </Form>
        )}
      </>
    );
}