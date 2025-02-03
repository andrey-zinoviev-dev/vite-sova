import { useParams } from "react-router"

export default function Module() {
    const { moduleId } = useParams();
    // console.log(moduleId);
    
    return (
        <>
            <span>Модуль</span>
        </>
    )
}