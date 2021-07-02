import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtnLink,
    NavBtn,
    Logo,
} from "./NavbarElements";
import logo from "../../assets/images/inverteLogo.png";

export const Navbar = ({
    toggle,
    mainNav,
    textNavLogo,
    firstNavLink,
    firstNavLinkText,
    secondNavLink,
    secondNavLinkText,
    thirdNavLink,
    thirdNavLinkText,
}) => {
    const [scrollNav, setScrollNav] = useState(true);
    // const [colorNavButton, setColorNavButton] = useState(true);
    const changeNav = () => {
        if (window.scrollY >= 20) {
            setScrollNav(false);
            // setColorNavButton(0);
        } else {
            setScrollNav(true);
            // setColorNavButton(1);
        }
    };

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            window.addEventListener("scroll", changeNav);
        }
        return () => {
            isCancelled = true;
        };
    }, []);

    // function
    const toggleHome = () => {
        scroll.scrollToTop(); //there is also scroll down
    };

    return (
        <>
            <Nav scrollNav={scrollNav} mainNav={mainNav}>
                <NavbarContainer pos={true}>
                    <NavLogo to="/" onClick={toggleHome} mainNav={mainNav}>
                        <Logo src={logo} />
                        {textNavLogo}
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to={firstNavLink}
                                smooth={true}
                                duration={650}
                                spy={true}
                                offset={0}
                            >
                                {firstNavLinkText}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to={secondNavLink}
                                smooth={true}
                                duration={650}
                                spy={true}
                                exact="true"
                                offset={0}
                            >
                                {secondNavLinkText}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to={thirdNavLink}
                                smooth={true}
                                duration={650}
                                spy={true}
                                offset={0}
                            >
                                {thirdNavLinkText}
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
