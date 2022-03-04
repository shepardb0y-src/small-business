import React from 'react';
import styled from 'styled-components'


export const PricesContainer = styled.div`
display:flex;
justify-content:center;
align:items:center;
gap:2rem;
`
export const Card = styled.div`

overflow: hidden;
width:300px;
padding: 3rem 0 2rem;
border-radius: 0.5rem;
color:grey;
border:1px solid black;
`;
export const Content = styled.div`


display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
export const Title= styled.div`
font-size:1.25rem;
`;

export const PackagePrice = styled.div`
font-size:3rem
color:grey;
`;

const PricesCard = () => {
    return (
        <PricesContainer>
            <Card>
                <Content>
                    <Title>Basic</Title>
                    <PackagePrice>$50</PackagePrice>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Title>Intermediate</Title>
                    <PackagePrice>$75</PackagePrice>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Title>Advanced</Title>
                    <PackagePrice>$100</PackagePrice>
                </Content>
            </Card>
        </PricesContainer>
    );
}

export default PricesCard;
