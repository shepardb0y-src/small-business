import React from "react";
import styled from "styled-components";
import { Button } from "../components/GlobalStyles"
const PricesContainer = styled.div`
display:flex;
justify-content:center;
align:items:center;
gap:2rem;
  @media only screen and (max-width: 320px) {
    display:flex;
    flex-direction:column;
  }
  @media only screen and (max-width: 360px) {
    display:flex;
    flex-direction:column;
  }
  @media only screen and (max-width: 411px) {
    display:flex;
    flex-direction:column;
  }

  @media only screen and (max-width: 768px) {
    display:flex;
 flex-direction:column;
  }
 
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 265px;
  transform-style: preserve-3d;
  transition: all 1s ease;
  background-color: yellow;
  &:hover {
    transform: rotateY(180deg);
  }
`;
const CardFront = styled.div`
position: absolute;
height: 100px;
width: 100px;
backface-visibility: hidden;
}
`;
const CardBack = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.25rem;
`;

const PackagePrice = styled.h2`
font-size:3rem
color:grey;
`;


const PricesCard = () => {
  return (
    <PricesContainer>
      <Card>
        <CardFront>
          
          <Content>
            <Title>Basic</Title>
            <PackagePrice>$50</PackagePrice>
          </Content>
        </CardFront>
        <CardBack>
          <Button> Purchase</Button>
        </CardBack>
      </Card>

      <Card>
        <CardFront>
          <Content>
            <Title>Intermediate</Title>
            <PackagePrice>$75</PackagePrice>
          </Content>
        </CardFront>
        <CardBack>
          <Button> Purchase</Button>
        </CardBack>
      </Card>
      <Card>
        <CardFront>
          
          <Content>
            <Title>Advanced</Title>
            <PackagePrice>$100</PackagePrice>
          </Content>
        </CardFront>
        <CardBack>
          <Button> Purchase</Button>
        </CardBack>
      </Card>
    </PricesContainer>
  );
};

export default PricesCard;
