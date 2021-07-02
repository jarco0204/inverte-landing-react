import styled from "styled-components";

const handleColorCard = (color) => {
    switch (color) {
        case "primary":
            return "#07070D";
        case "secondary":
            return "#ff9e00";
        case "third":
            return "#14213d";
    }
};

export const ServicesContainer = styled.div`
    /* background-color: #14213d; */
    position: relative;
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: whitesmoke;

    @media screen and (max-width: 1200px) {
        height: 1400px;
    }
    @media screen and (max-width: 760px) {
        height: 2300px;
    }
`;

export const ServicesWrapper = styled.div`
    z-index: 10;
    max-width: 1050px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 7px;
    padding: 0 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: ${({ colorCard }) => handleColorCard(colorCard)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    color: ${({ colorCard }) =>
        colorCard == "primary" ? "white" : "rgb(72,72,72)"};
    max-height: 340px;
    padding: 30px;
    margin: 10px;
    box-shadow: 0 0 2px 1px white;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0 0 4px 2px ${({ colorCard }) => handleColorCard(colorCard)};
    }
    @media screen and (min-width: 880px) {
        height: 330px;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    z-index: 10;
    font-size: 40px;
    margin: 20px 0;
    color: black;
    padding-bottom: 20px;
    @media screen and (max-width: 480px) {
        font-size: 2.04rem;
        padding-bottom: 10px;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 0.9rem;
    color: ${({ colorCard }) => (colorCard == "primary" ? "#ccff33" : "khaki")};
    font-weight: bold;
    text-align: center;
`;

export const ServicesP = styled.p`
    color: ${({ colorCard }) =>
        colorCard == "primary" ? "white" : "whitesmoke"};
    font-size: 0.85rem;
    text-align: center;
`;
