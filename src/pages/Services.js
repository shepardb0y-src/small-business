import React from "react";
import styled from 'styled-components'
import PricesCard from "../components/PricesCard";

 const ServicesContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 15%;

`


const Services = () => {
  return <ServicesContainer><PricesCard/></ServicesContainer>;
};

export default Services;
