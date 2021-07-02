import React, { useState } from "react";
import Navbar from "../components/Navbar"; //Looks for index.js
import { navBarHome } from "../components/Navbar/Data"; // reusable navbar component for main page
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import SupportedBy from "../components/SupportedBy";
import InfoSection from "../components/InfoSection";
import { homeObj1, homeObj2 } from "../components/InfoSection/Data"; //reusable InfoSection component
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
// import Team from "../components/Team";
// import Team from "../components/Team";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false); //hook is used in SidebarElements
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    //<> is a react fragment, similar to div
    // ...homeObj1 is used for object destructuring; basically it supplies the data to such component
    return (
        <>
            <Navbar toggle={toggle} {...navBarHome} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <SupportedBy />
            <InfoSection {...homeObj1} />

            <Services />

            <InfoSection {...homeObj2} />

            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
