import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { icons } from '../data/IconsFooter';
import { linksfooter } from '../data/Links';
import Logo from './Logo'

const desktop = '426';

const Footer = styled.div`
    margin-top:5rem;
    width:100%;
    background:hsl(233, 26%, 24%);
    padding:2rem 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
@media(min-width:${desktop}px){
    flex-direction:row;
    justify-content:space-around;
}
`;
const LogoFooter = styled.div`
  text-align:center;

@media(min-width:${desktop}px){
    text-align:start;
    margin-left:0;
}

`
const IconsContainer = styled.div`
 margin-top:1.5rem;
`;
const Icon = styled.img`
    margin:0 .5rem 2rem;
    transform:scale(1.2);
@media(min-width:${desktop}px){
    margin:2rem 0 0 1rem;
&:first-child{
    margin:0;
}
}

`;
const LinksNav = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:1rem;
    align-items:center;
@media(min-width:${desktop}px){
    padding-top:1.6rem;
    margin-left:-8rem;
    display:grid;
    grid-template-columns:repeat(2,auto);
    grid-template-rows:repeat(3,auto);
    grid-column-gap:7rem;
    grid-template-areas:"link1 link4" "link2 link5" "link3 link6";
& a:nth-child(1) {
    grid-area:link1;
}
& a:nth-child(2) {
    grid-area:link2;
}
& a:nth-child(3) {
    grid-area:link3;
}
& a:nth-child(4) {
    grid-area:link4;
}
& a:nth-child(5) {
    grid-area:link5;
}
& a:nth-child(6) {
    grid-area:link6;
}
}
`; 
const Links = styled.a`
    text-decoration:none;
    font-weight:300;
    font-size:0.8rem;
    color:hsl(220, 16%, 96%);
    margin-bottom:1.2rem;
@media(min-width:${desktop}px){
    font-size:1rem;
}
`;
const Support = styled.div`
 text-align:center;
@media(min-width:${desktop}px){
    text-align:end;
}
`;
const Reserved = styled.p`
    margin-top:1.5rem;
    color:hsl(233, 8%, 62%);
    font-size:0.8rem;
`;


const Footers = (props) => {
    return (
        <Footer onClick={props.toogleIcon? props.toogleNavIcon : null}>
            <LogoFooter>
                <Logo color='#fff'></Logo>
                <IconsContainer>
                    {icons.map((items, index) => (
                        <Icon key={index} src={items} />
                    ))}
                </IconsContainer>
            </LogoFooter>
            <LinksNav>
                {linksfooter.map((items, index) => (
                    <Links key={index} href={items.route}> {items.tittle}</Links>
                ))}
            </LinksNav>
            <Support>
                <Button></Button>
                <Reserved>© Easybank. All Rights Reserved</Reserved>
            </Support>
        </Footer>
    )
}

export default Footers
