import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}