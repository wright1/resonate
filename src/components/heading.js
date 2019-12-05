import React from "react";
import styled from "styled-components";

const HeadDiv = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 20vh;
margin 3vh auto
background-color: #C3CEDA;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
font-family: 'Bebas Neue', cursive;
font-size: 3rem;
color: #071330;
`;
const Span = styled.span`
font-family:'IBM Plex Serif', serif;
font-size: 1.2rem;
margin-top: -3rem;
color: #0C4160;
`;

const Header = () => (
    <HeadDiv>
        <Title>
            Resonate
        </Title>
        <Span>
            for those that like to listen
        </Span>

    </HeadDiv>
)
export default Header