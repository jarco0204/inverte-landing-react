import React from "react";
import {
    SupportedContainer,
    SupportedWrap,
    SupportedTitle,
    SupportedImageWrap,
    SupportedImage,
} from "./supportedElements";

import Memorial from "../../assets/images/memorialIcon.png";
import Mitacs from "../../assets/images/mitacsIcon.png";
import Borealis from "../../assets/images/borealisIcon.png";
import Genesis from "../../assets/images/genesisIcon.png";

const SupportedBy = () => {
    return (
        <SupportedContainer>
            <SupportedWrap>
                <SupportedTitle>Supported By</SupportedTitle>
                <SupportedImageWrap>
                    <SupportedImage src={Memorial} />
                    <SupportedImage src={Mitacs} />
                    <SupportedImage src={Borealis} />
                    <SupportedImage src={Genesis} />
                </SupportedImageWrap>
            </SupportedWrap>
        </SupportedContainer>
    );
};

export default SupportedBy;
