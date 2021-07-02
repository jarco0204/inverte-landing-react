//Allows one to create reusable components
import img1 from "../../assets/images/aboutImg.jpg";
import Image1 from "../../assets/images/food_mission_bg.jpg";
// import Image2 from "../../assets/images/.svg";
export const homeObj1 = {
    id: "about",
    // ImgBg: Image2,
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "The solution your restaurant needs!",
    headline: "Weighing Scales for Food Pans",
    description:
        "Ensure portion control directly from your prep-table without altering it.",
    description1:
        "Consequently, eliminate over-serving, squandering,  and pre-portioning your ingredients.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: img1,
    alt: "Designed for Restaurants",
    dark: false,
    primary: true,
    buttonType: true,
};

export const homeObj2 = {
    id: "mission",
    ImgBg: Image1,
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine:
        "1.44M Tonnes of edible food is wasted at Canadian restaurants—$7.14B CAD.",
    headline: "Reduce Food Waste",
    description:
        "Through Machine Learning, improve forecasting of resupply orders and daily prepping quantities.",
    description1:
        "Our goal is to minimize food not served and maximize inventory.",
    buttonLabel: "Learn More",
    imgStart: false,
    alt: "Car",
    dark: false,
    primary: false,
    buttonType: false,
};
