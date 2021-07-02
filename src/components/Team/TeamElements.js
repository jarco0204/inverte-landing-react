import styled from "styled-components";

export const TeamContainer = styled.div`
    height: 400px;
    padding: 20px 0px;
    background: whitesmoke;
    @media screen and (max-width: 768px) {
        padding: 0px 0px;
    }
`;

export const TeamWrap = styled.div`
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;
export const TeamTitle = styled.h1`
    font-size: 30px;
    justify-content: center;
    margin-bottom: 16px;
    color: #ccff33;
`;
