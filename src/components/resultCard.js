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
font-family: 'Bebas Neue', san serif;
font-size: 1.3rem;
padding-bottom: 0.4rem;
text-decoration: none;
color: #0C4160;
&:hover {
    color: #E1C340;
}
`;
const ResultCard = ({imgScr, title, link, track}) => {
    return(
        <CardWrapper>
            <Image src={imgScr} alt="track image" />
            <Span>{title}</Span>
<PgLink href={link}>{ track }</PgLink>

        </CardWrapper>
    )
}
export default ResultCard;