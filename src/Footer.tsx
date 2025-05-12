// import GenericList from "./GenericList";
// import logo from "./assets/image 2.svg";
import "./Footer.css"
import { Container } from "./Container";

export default function Footer() {
    return (
      <footer className="footer">
        <Container>
          <div className="footer__wrapper">
            <span>2023-2025 SOVA</span>
            <span>Самый легкий путь в экстрим вокал</span>
            {/* <GenericList items={["vk", "inst", "tg", "zoom"]} className="footer__links" renderItem={(item) => {
                        return <span>{item}</span>
                    }}></GenericList> */}
          </div>
        </Container>
      </footer>
    );
}