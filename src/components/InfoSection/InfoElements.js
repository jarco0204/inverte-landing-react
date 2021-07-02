import styled from "styled-components";

export const InfoContainer = styled.div`
    height: 724px;
    padding: 0px 0px;
    background: ${({ lightBg }) => (lightBg ? "whitesmoke" : "#ff9e00;")};
    @media screen and (max-width: 768px) {
        padding: 0px 0px;
    }
`;
export const InfoBg = styled.div`
    z-index: 0;
    position: absolute;

    width: 100%;
    height: 105%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        height: 105%;
    }
`;
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 9;
    height: 800px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
    @media screen and (max-width: 780px) {
        padding: ${({ lightBg }) => (lightBg ? "56px 0;" : "200px 0;")};
    }
`;

export const InfoRow = styled.div`
    z-index: 9;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col2 col1'`};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Column1 = styled.div`
    margin-left: ${({ lightBg }) => (lightBg ? "25px" : "60px")};
    scale: 1.1;
    margin-right: 60px;

    grid-area: col1;
    @media screen and (max-width: 668px) {
        margin-right: 80px;
        scale: 1;
        margin-left: 20px;
    }
    @media screen and (min-width: 1208px) {
        scale: 1.2;
    }
`;

export const Column2 = styled.div`
    margin-left: ${({ lightBg }) => (lightBg ? "0px" : "50px")};
    grid-area: col2;
    @media screen and (max-width: 768px) {
        padding-top: 10px;
        margin-left: 0px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 50px;
`;

export const TopLine = styled.p`
    color: ${({ lightBg }) => (lightBg ? "#014f86" : "yellow")};
    font-size: 16px;
    border-radius: 40px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    text-align: left;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 856;
    color: ${({ lightText }) => (lightText ? "#ccff33" : "Orange")};

    @media screen and (max-width: 850px) {
        font-size: 35px;
    }
    @media screen and (max-width: 458px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.p`
    background-color: ${({ lightBg }) =>
        lightBg ? "" : "rgba(1, 1, 1, 0.30);"};
    max-width: 440px;
    border-radius: 20px;
    padding: 10px 40px;
    margin-bottom: 17px;
    text-align: left;
    font-size: 19px;
    line-height: 30px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? "whitesmoke" : "black")};
    @media screen and (max-width: 850px) {
        font-size: 17px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    @media screen and (max-width: 768px) {
        max-width: 350px;
    }
`;

export const Img = styled.img`
    border-radius: 20px;
    width: 100%;
`;
