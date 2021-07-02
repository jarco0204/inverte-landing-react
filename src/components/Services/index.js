import React from "react";
import Icon1 from "../../assets/images/saveMoney.svg";
import Icon2 from "../../assets/images/dataAnalyticsService.svg";
import Icon3 from "../../assets/images/saveTime.svg";
import Icon4 from "../../assets/images/inventoryManagement.svg";
import Icon5 from "../../assets/images/visualizeData.svg";
import Icon6 from "../../assets/images/reduceTrash.svg";

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from "./ServicesElements";
// import Image from "../../assets/images/services.svg";
// import { ImageBg, HeroBg } from "../HeroSection/HeroElements";
const Services = () => {
    return (
        <ServicesContainer id="services">
            {/* <HeroBg>
                <ImageBg src={Image} />
            </HeroBg> */}
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard colorCard="third">
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Track Every Portion</ServicesH2>
                    <ServicesP colorCard={"primary"}>
                        Save money by optimizing your inventory.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard colorCard="primary">
                    <ServicesIcon src={Icon2} />
                    <ServicesH2 colorCard={"primary"}>
                        Data Analytics
                    </ServicesH2>
                    <ServicesP>Prepare and order what is necessary.</ServicesP>
                </ServicesCard>
                <ServicesCard colorCard="secondary">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Save Time</ServicesH2>
                    <ServicesP colorCard={"primary"}>
                        Investing in pre-portioning will be a thing of past.{" "}
                    </ServicesP>
                </ServicesCard>
                <ServicesCard colorCard="third">
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Inventory Management</ServicesH2>
                    <ServicesP colorCard={"primary"}>
                        Automate inventory orders and track every gram.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard colorCard="primary">
                    <ServicesIcon src={Icon5} />
                    <ServicesH2 colorCard={"primary"}>
                        Visualize Savings
                    </ServicesH2>
                    <ServicesP>
                        Get detailed information on expenditure of resources.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard colorCard="secondary">
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Minimize Waste </ServicesH2>
                    <ServicesP colorCard={"primary"}>
                        Say goodbye to inconsistent portions, over-prepping, and
                        spoilage.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
