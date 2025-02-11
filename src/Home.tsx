import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {

    // console.log(user);
    return (
        <>
            {/* <SideBar></SideBar> */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}