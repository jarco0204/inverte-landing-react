import styled from "styled-components";

export const FormContainer = styled.form`
    height: 850px;
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`;
export const AboutBg = styled.div`
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;
export const ImageBg = styled.img`
    width: 100%;
    height: 105%;
    object-fit: cover;
`;
export const FormH1 = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
    color: #ccff33;
`;
export const FormH2 = styled.h2`
    font-size: 14px;
    margin-bottom: 10px;
    padding: 4px;
    color: white;
    text-align: center;
`;
export const FormH3 = styled.h3`
    max-width: 450px;
    text-align: center;
    font-size: 15px;
    word-wrap: break-word;
    padding: 10px;
    margin-left: 20px;
    color: black;
`;

export const FormTitleH2 = styled.h2`
    font-size: 17px;
    text-align: left;

    color: black;
`;

export const FormNameInput = styled.input`
    width: 40%;
    background-color: whitesmoke;
    margin: 5px 0;
    margin-bottom: 20px;
    resize: none;
    border-radius: 15px;
    padding: 8px 10px;
    outline-style: none;

    &:focus {
        box-shadow: 0 0 3pt 2pt rgb(44, 239, 12);
    }
`;
export const FormMessageInput = styled.textarea`
    width: 50%;
    background-color: whitesmoke;
    height: 6.5rem;
    padding: 10px 10px;
    resize: none;
    border-radius: 10px;
    margin-bottom: 10px;
    outline-style: none;

    &:focus {
        box-shadow: 0 0 3pt 2pt rgb(44, 239, 12);
    }
`;
export const FormButton = styled.input`
    width: 140px;
    color: #ccff33;
    font-size: 18px;
    box-shadow: 0 0 10px 3px white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    border-radius: 14px;
    margin-bottom: 8px;
    margin-top: 12px;
    &:hover {
        background-color: white;
        color: rgb(44, 239, 12);
    }
`;
