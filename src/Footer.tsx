import GenericList from "./GenericList";
import logo from "./assets/image 2.svg";
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper-logo-wrapper">
                    <img src={logo}></img>
                    <span>2023-2025 SOVA</span>
                </div>
                <span>Самый легкий путь в экстрим вокал</span>
                <GenericList items={["vk", "inst", "tg", "zoom"]} className="footer__links" renderItem={(item) => {
                    return <span>{item}</span>
                }}></GenericList>
            </div>

        </footer>
    )
}