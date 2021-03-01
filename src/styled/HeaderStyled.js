import styled from 'styled-components';
import BgImageFondoMobile from '../images/bg-intro-mobile.svg'
import BgImageFondoDesktop from '../images/bg-intro-desktop.svg'
import ImagePhone from '../images/image-mockups.png'


const desktop = '426';

export const HeaderContainer = styled.header`
        display:flex;
        flex-direction:column;
        margin-bottom:4.5rem;

@media(min-width:${desktop}px){       
    flex-direction:row-reverse;
    margin-bottom:0;

}
`;

export const BgImageFondo = styled.div`
    height:380px;
    background:url(${ImagePhone}) center bottom no-repeat,url(${BgImageFondoMobile})0 1rem  no-repeat;
    background-size:356px, cover;

@media(min-width:${desktop}px){      
    height:700px;
    width:100%;
    background:url(${BgImageFondoDesktop})top -240px left 30px  no-repeat; 
    background-size:1440px;
}
`;
export const BgPhone = styled.div`
@media(min-width:${desktop}px){ 
        height:850px;
        width:50%;
        top:0;
        right:0;
        background:url(${ImagePhone}) right -120px bottom 30px no-repeat;
        background-size:700px; 
        position:absolute;
}
`;

export const InfoHeader = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    h1{
        color:hsl(233, 26%, 24%);
        font-weight:400;
        line-height:2.5rem;
        margin-bottom:10px;
        margin-top:1.4rem;    
    }
    p{
        font-weight:300;
        font-size:0.8rem;
        line-height:1.4rem;
        margin:0 1rem;
        color:hsl(233, 8%, 62%);
        margin-bottom:1.5rem;
    }

@media(min-width:${desktop}px){ 
    margin-left:7rem;
    width:50%;
    align-items:start;
    text-align:start;
    p{
        margin:0;
        margin-bottom:2rem;
        width:83%;
    }
}

`;