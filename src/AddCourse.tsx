import { useState } from "react";
// import AddCourseStep from "./AddCourseStep";
import Input from "./Input";
import Wizard from "./Wizard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
import { addBaseInfo } from "./store/features/newCourseFeature";
import AddCourseBase from "./AddCourseBase";

export default function AddCourse() {
    //dispatch
    const dispatch = useAppDispatch();

    const [step, setStep] = useState<number>(0);

    const [tarifs, setStarifs] = useState<{
        title: string,
        starts: string,
        ends: string,
    }[]>([]);

    // const [baseInfo, setBaseinfo] = useState<

    return (
        <>
            <Wizard>
                <AddCourseBase></AddCourseBase>
                <h1>Второй этап нового курса</h1>
                <h1>Третий этап нового курса</h1>
            </Wizard>
        </>

    )
}