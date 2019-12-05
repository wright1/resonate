import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
height: 45vh;
align-items: center;
justify-content: center;
margin: 1rem auto;
border: 0.3px solid #738FA7;
border-radius: 1rem;
box-shadow: 10px 10px 23px -5px rgba(195,206,218,0.85);
padding-top: 1rem;
@media (min-width: 1024px) {
    width: 35vw;
}
`;
const Image = styled.img`
width: 70vw;
@media (min-width: 1024px) {
    width 30vw;
}
`;
const Span = styled.span`
font-family: 'Bebas Neue', cursive; 
`;
const PgLink = styled.a`
font-family: 'Open Sans', san serif;
text-decoration: none;
`;
const ResultCard = ({imgScr, title, link}) => {
    return(
        <CardWrapper>
            <Image src={imgScr} alt="track image" />
            <Span>{title}</Span>
    <PgLink href={link}>Music page</PgLink>

        </CardWrapper>
    )
}
export default ResultCard;