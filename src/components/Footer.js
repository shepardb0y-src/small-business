import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:4%;
`


const Footer = () => {
    return (
        <FooterContainer><div>Created By Fabio Benoit</div></FooterContainer>
    );
}

export default Footer;
