import styled from 'styled-components';
import Hamburger from '../images/icon-hamburger.svg';
import closeNav from '../images/icon-close.svg';

const desktop = '426';

export const NavContainer = styled.nav`
    position:fixed;
    top:0;
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
    z-index:10000;

@media(min-width:${desktop}px){       

}
`;
export const NavLogo = styled.div` 
    margin-left:1.2rem;
@media(min-width:${desktop}px){
    margin-left:7rem;
}
`;

export const NavIconToogle = styled.div` //container toogle nav
margin-right:1.2rem;

@media(min-width:${desktop}px){
    display:none;
}
`;

export const HamburgerIcon = styled.img.attrs({src:Hamburger})``;
export const CloseIcon = styled.img.attrs({src:closeNav})``;

export const NavMenuLinks = styled.div`
    display:none;
@media(min-width:${desktop}px){       
    display:flex;
}
`;
export const Links = styled.a`
    margin:0 1rem;
    font-size:0.7rem;
    text-decoration:none;
    color:hsl(233, 8%, 62%);
/* &:after{
    content:'';
    position:absolute;
    width:100%;
    height:2px;
    background: linear-gradient(90deg, rgba(49,211,92,1), rgba(43,183,218,1));

} */
`;

export const ContainerBtn = styled.div`
    display:none;
@media(min-width:${desktop}px){       
    display:block;
    margin-right:8.5rem;
}
`;
