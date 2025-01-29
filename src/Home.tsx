import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "./hooks";

export default function Home() {
    const user = useAppSelector((state) => {
        return state.user;
    })
    console.log(user);
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}