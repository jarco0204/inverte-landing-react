import React, { useState } from "react";
import Image from "../../assets/images/heroFinal.svg";
import ImageChef from "../../assets/images/chef.svg";
import { Button } from "../ButtonElement";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    ImageBg,
    InfoRow,
    Column1,
    Column2,
    Img,
    ImgWrap,
} from "./HeroElements";

const HeroSection = () => {
    const textShow = [
        "A modern weighing scale for inserts that guarantees accurate portions.",
        "hey",
    ];
    const [hover, setHover] = useState(false);
    // const [toggleIndex, setToggle] = useState(parseInt("0"));
    // useEffect(() => {
    //     const intervalID = setTimeout(() => {
    //         console.log("change");
    //         setToggle(!1);
    //     }, 3000);

    //     return () => clearInterval(intervalID);
    // }, [toggleIndex]);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={Image} alt={"background image"} />
            </HeroBg>

            <InfoRow>
                <Column1>
                    <HeroContent>
                        <HeroH1 colorTitle="#ff9e00">
                            Real time portion tracking.
                        </HeroH1>
                        <HeroH1 colorTitle="#07070D"></HeroH1>
                        <HeroH1 colorTitle="#b9e769">
                            Food Waste Analytics!
                        </HeroH1>
                        <HeroP>{textShow[0]}</HeroP>
                        <HeroBtnWrapper>
                            <Button
                                to="contact"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary={1}
                                dark={1}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                buttonType={0}
                            >
                                Request Demo{" "}
                                {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>
                        </HeroBtnWrapper>
                    </HeroContent>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={ImageChef} alt={"chef"} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </HeroContainer>
    );
};

export default HeroSection;
