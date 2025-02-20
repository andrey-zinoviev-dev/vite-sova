import { Container } from "./Container";
import "./Profile.css"

import { Outlet } from "react-router";

export default function Profile() {

    return (
        <section className="profile">
            <Container>
                <Outlet></Outlet>
            </Container>
        </section>
    )
}