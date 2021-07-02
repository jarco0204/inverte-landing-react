import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { navBarLearnMore } from "../Navbar/Data";
import { Container } from "./LearnElements";

const LearnMoreComp = () => {
    const [isOpen, setIsOpen] = useState(false); //variable is used in SidebarElements

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Container>
                <Navbar toggle={toggle} {...navBarLearnMore} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <h1>Page Under Construction</h1>
            </Container>
        </>
    );
};

export default LearnMoreComp;
