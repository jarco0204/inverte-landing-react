import React from "react";
import { Button, ButtonRoute } from "../ButtonElement";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    ImgWrap,
    Img,
    InfoBg,
    ImageBg,
} from "./InfoElements";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    description1,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    buttonType,
    ImgBg,
}) => {
    const prepareButton = () => {
        if (buttonType) {
            return (
                <Button
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    buttonType={buttonType ? 1 : 0}
                >
                    {buttonLabel}
                </Button>
            );
        } else {
            return (
                <ButtonRoute
                    to="/learn"
                    offset={0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    buttonType={buttonType ? 1 : 0}
                >
                    {buttonLabel}
                </ButtonRoute>
            );
        }
    };
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoBg>
                    <ImageBg src={ImgBg}></ImageBg>
                </InfoBg>
                <InfoWrapper lightBg={lightBg}>
                    <InfoRow imgStart={imgStart}>
                        <Column1 lightBg={lightBg}>
                            <TextWrapper>
                                <TopLine lightBg={lightBg}>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <SubTitle
                                    lightBg={lightBg}
                                    lightTextDesc={lightTextDesc}
                                >
                                    {description}
                                    <br></br>
                                    {description1}
                                </SubTitle>

                                <BtnWrap>{prepareButton()}</BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
