import { Link } from "react-router";
import logo from "./assets/image 2.svg";
import "./Logo.css";

export default function Logo() {
    return (
        <Link to={"/"}>
            <img className="app-logo" src={logo}></img>
        </Link>
    )
}