import React, { useState } from "react";
import emailjs from "emailjs-com";
import ImgBg from "../../assets/images/contactBg.svg";
import {
    FormContainer,
    FormH1,
    FormH2,
    FormH3,
    FormTitleH2,
    FormNameInput,
    FormButton,
    FormMessageInput,
    AboutBg,
    ImageBg,
} from "./FormElements";

//Future idea is to add  react-google-captcha
const ContactForm = () => {
    const [data, setData] = useState({
        nameInput: "",
        emailInput: "",
        messageInput: "",
        sent: false,
        buttonText: "Get in touch",
        err: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const resetForm = () => {
        setData({
            nameInput: "",
            emailInput: "",
            messageInput: "",
            sent: false,
            buttonText: "Success",
            err: "",
        });
        // console.log("this executes1");
    };
    const formSubmit = (e) => {
        e.preventDefault(); //Prevent from redirecting
        require("dotenv").config(); // To read env variables
        setData({
            ...data,
            buttonText: "Sending...",
        });
        var templateParams = {
            name: data.nameInput,
            email: data.emailInput,
            message: data.messageInput,
        };

        emailjs
            .send(
                process.env.REACT_APP_serviceID,
                process.env.REACT_APP_templateID,
                templateParams,
                process.env.REACT_APP_userID,
            )
            .then(
                (result) => {
                    console.log(result.text);
                    resetForm();
                },
                (error) => {
                    console.log(error.text);
                    resetForm();
                },
            )
            .catch((err) => {
                console.log(err.response.status);
                setData({
                    ...data,
                    buttonText: "Internal failure",
                    err: "fail",
                });
            });
    };

    return (
        <FormContainer id="contact" onSubmit={formSubmit}>
            <AboutBg>
                <ImageBg src={ImgBg}></ImageBg>
            </AboutBg>
            <FormH1>Contact Us</FormH1>
            <FormH2>
                This is just the beginning of the food waste revolution!
            </FormH2>
            <FormH3>We&apos;ll get back in one business day.</FormH3>
            <FormTitleH2>Name: </FormTitleH2>
            <FormNameInput
                required
                type="text"
                name="nameInput"
                value={data.nameInput}
                onChange={handleChange}
            />
            <FormTitleH2>Email: </FormTitleH2>
            <FormNameInput
                required
                type="email"
                value={data.emailInput}
                onChange={handleChange}
                name="emailInput"
            />
            <FormTitleH2>Message: </FormTitleH2>
            <FormMessageInput
                required
                value={data.messageInput}
                onChange={handleChange}
                name="messageInput"
            ></FormMessageInput>
            <FormButton type="submit" value={data.buttonText} />
        </FormContainer>
    );
};

export default ContactForm;
