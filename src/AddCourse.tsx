import Wizard from "./Wizard";

import AddCourseBase from "./AddCourseBase";

export default function AddCourse() {
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