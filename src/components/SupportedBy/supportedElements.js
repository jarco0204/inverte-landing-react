import styled from "styled-components";

export const SupportedContainer = styled.footer`
    background-color: #14213d;
`;

export const SupportedWrap = styled.div`
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SupportedTitle = styled.h1`
    font-size: 30px;
    justify-content: center;
    margin-bottom: 16px;
    color: #ccff33;
`;

export const SupportedImageWrap = styled.div`
    display: flex;
    max-width: 400px;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: 780px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const SupportedImage = styled.img`
    height: 100px;
    padding: 5px 5px;
    margin: 0 40px;
    width: 150px;
`;
