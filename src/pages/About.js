import React from 'react';
import styled from 'styled-components'
import { Button } from "../components/GlobalStyles";
import { useNavigate } from "react-router-dom";

const AboutContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:2rem
`
const Info1 = styled.div`
background-color:#CAD2C5;
font-size: 1.5rem;
`
const OurCompany = styled.div`
background-color:gold;
font-size: 2rem;
`
const Info2 = styled.div`
background-color:#59C3C3;
font-size: 1.5rem;
`
const Info3 = styled.div`
background-color:#CAD2C5;
font-size: 1.5rem;

`
const Info4 = styled.div`
background-color:#59C3C3;
font-size: 1.5rem;

`
const Info5 = styled.div`
background-color:#CAD2C5;
font-size: 1.5rem;
`
const Info6 = styled.div`
background-color:#59C3C3;
font-size: 1.5rem;
`
const Info7 = styled.div`
background-color:#CAD2C5;
font-size: 1.5rem;
`

const About = () => {
const navigate = useNavigate();
const handleClick = (e) => {
  navigate("/services")
};

    return (
        <AboutContainer>
           <OurCompany> Messge from our CEO</OurCompany> 
           <Info2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info2> 
           <Info3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info3> 
           <Info4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info4> 
           <Info5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info5> 
           <Info6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info6> 
           <Info7>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae, quasi praesentium amet, debitis id neque soluta eaque suscipit accusamus vitae ut fugiat eos exercitationem aliquid adipisci? Impedit, fugit. Incidunt ipsam repellendus consequuntur exercitationem libero sunt explicabo molestiae deleniti eaque fugit odit, reprehenderit ut. Debitis obcaecati iure in illum laborum?</Info7> 
           <Button onClick={handleClick}>See Our Rates!</Button>
        </AboutContainer>
    );
}

export default About;
