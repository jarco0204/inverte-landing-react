import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop(); //there is also scroll down
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signin">Technology</FooterLink>
                            <FooterLink to="/signin">Food waste</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">
                                Terms of services
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialLogo to="/" onClick={toggleHome}>
                    InVerte
                </SocialLogo>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.facebook.com"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights>
                    InVerte Portion Control Ltd. {new Date().getFullYear()} All
                    rights reserved.
                </WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
