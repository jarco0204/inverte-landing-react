import styled from "styled-components";
import { Link as LinkS } from "react-scroll"; //alias
import { Link as LinkR } from "react-router-dom";

//primary and dark allows you to change the color
//This is a LinkScroll
export const Button = styled(LinkS)`
    border-radius: 14px;
    background: ${({ buttonType }) => (buttonType ? "#ccff33" : "#ff9e00")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "white" : "black")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 15px 2px var(--light);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#fff" : "navy")};
        text-decoration: none;
        color: ${({ buttonType }) =>
            buttonType ? "rgba(44, 239, 12, 1)" : "orange"};
    }
`;
//This is a Link Route (used for signIn and Learn More)
export const ButtonRoute = styled(LinkR)`
    border-radius: 14px;
    background: #ff9e00;
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: whitesmoke;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 12px 7px LightGoldenRodYellow;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        text-decoration: none;
        color: rgba(44, 239, 12, 1);
    }
`;
