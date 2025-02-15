import RowButton from "./RowButton";
import { UserInterface } from "./store/features/userSlice";
import "./ContactButton.css";

interface ContactButtonInterface {
  contact: UserInterface,
  handleClick: () => void,
  active?: boolean
}

export default function ContactButton({contact, handleClick, active}: ContactButtonInterface) {
  return <RowButton onClick={handleClick} className={active ? "contact-button_active contact-button" : "contact-button"}>
    <img className="contact-button__img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"></img>
    <div className="contact-button__receiver-wrapper">
      <span className="contact-button__name">{contact.name}</span>
      <span className="contact-button__last-message">нет сообщений</span>
    </div>
  </RowButton>
}