import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding: 80px 0px;
    height: 650px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        padding: 1px 10px;
        height: 800px;
    }
`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
// In order to make the website display the video for smaller screen, I implemented the grid
export const InfoRow = styled.div`
    z-index: 3;
    display: grid;

    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: "col1 col2";
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const Column1 = styled.div`
    grid-area: col1;
    @media screen and (max-width: 768px) {
        padding: 30px 30px;
    }
`;
export const HeroContent = styled.div`
    display: flex;
    /* background-color: rgba(7, 7, 13, 0.98); */
    flex-direction: column;
    align-items: center;
    border-radius: 42px;
    padding: 25px 80px;

    @media screen and (max-width: 768px) {
        padding: 20px 40px;
    }
`;
const handleColorCard = (color) => {
    return color;
};
export const HeroH1 = styled.h1`
    color: ${({ colorTitle }) => handleColorCard(colorTitle)};
    font-weight: 800;
    text-align: center;
    word-wrap: normal;
    font-size: 36px;
`;
export const HeroP = styled.p`
    margin-top: 10px;
    color: #07070d;
    text-align: center;
    font-size: 1.15rem;
`;
export const HeroBtnWrapper = styled.div`
    margin-top: 5px;
    box-shadow: 0px 0px 15px 5px whitesmoke;
    border-radius: 14px;
`;
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
`;

// Column2 along the Video component
export const Column2 = styled.div`
    display: flex;
    margin-left: 20px;
    justify-content: space-around;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        padding-top: 10px;
        margin-left: 0px;
    }
`;
// export const VideoBg = styled.video`
//     border-radius: 20px;
//     width: 85%;
//     height: 65%;
//     max-height: 756px;
//     object-fit: cover;
//     @media screen and (max-width: 768px) {
//         width: 75%;
//         height: 75%;
//     }
// `;

export const ImgWrap = styled.div`
    max-width: 400px;
    @media screen and (max-width: 768px) {
        max-width: 350px;
    }
`;

export const Img = styled.img`
    border-radius: 20px;
    width: 100%;
    @media screen and (max-width: 768px) {
        height: 250px;
        width: 250px;
    }
`;
