import TableComp from "./TableComp";

export default function Catgories() {
    //test purposes
    const categories = [
        "Вокал",
        "Экстрим",
        "Композиторство",
        "Звукорежиссура",
        "Мастеринг"
    ]
    return (
        <>
            <h3>Категории курсов</h3>
            <ul className="">
                {categories.map((category) => {
                    return <li key={category}>
                        <button>{category}</button>
                    </li>
                })}
            </ul>
        </>
        
    )
}