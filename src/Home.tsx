import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Input from "./Input";
export default function Home() {
    return (
        <>
                <Header>
                    
                </Header>
                <Outlet></Outlet>
                <Footer></Footer>
        </>
    )
}