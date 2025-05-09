// import { Container } from "./Container";
import "./Profile.css"

import { Outlet, ScrollRestoration } from "react-router";

export default function Profile() {

    return (
        // <section className="profile">
        <>
            <ScrollRestoration />
            <Outlet></Outlet>
        </>
        // </section>
    )
}