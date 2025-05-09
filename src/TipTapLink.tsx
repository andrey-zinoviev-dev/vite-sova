import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Label from "./Label";
import Input from "./Input";

interface TipTapLinkInterface {
    handleClick: () => void,
}

export default function TipTapLink({ handleClick }: TipTapLinkInterface) {
    //state
    // const [linkClicked, setLinkClicked] = useState<boolean>(false);

    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faLink} />
        </button>
        // :
        // <>
        //     <button onClick={() => {
        //                 setLinkClicked(false);
        //             }}>
        //         <FontAwesomeIcon icon={faArrowLeft} />
        //     </button>
        //             <Label>
        //                 Адрес ссылки
        //                 <Input placeholder="Например, google.com" />
        //             </Label>
        // </>
    )
}