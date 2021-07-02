import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #07070d;
`;

export const FooterWrap = styled.div`
    padding: 10px 24px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 120px;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;
    padding-left: 70px;
    justify-content: center;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 8px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        padding-right: 40px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    justify-content: center;
    margin-bottom: 16px;
    color: #ccff33;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: DarkOrange;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    display: flex;
    justify-content: center;
`;

export const SocialMediaWrap = styled.div`
    max-width: 1100px;
    margin: 10px auto 10px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #ccff33;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2px;
    font-weight: bold;
    &:hover {
        color: DarkOrange;
        text-decoration: none;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 4px;
    display: flex;
    justify-content: center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #ff9e00;
    font-size: 24px;
    &:hover {
        color: white;
    }
`;
