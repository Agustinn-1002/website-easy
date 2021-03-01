import React from 'react'
import styled from 'styled-components'
import { menuLinks } from '../data/Links'

const DropDown = styled.div`
    position:absolute;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    z-index:-1;
    transition:all .4s;
    right:${({drop})=>drop?'0':'-100%'};
`
const Color = styled.div`
    position:absolute;
    transition:all .4s;
    top:70px;
    right:${({drop})=>drop?'0':'-100%'};
    height:100vh;
    width:100%;
    background:linear-gradient(rgba(45, 49, 77,.98) 10%,rgba(45, 49, 77,.5) 40%,rgba(255,255,255,.3));
    z-index:-1000;
`
const LinksContainer = styled.div`
    margin-top:22rem;
    border-radius:5px;
    padding:1rem 0;
    width:90%;
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
const Links = styled.a`
    margin:.6rem 0;
    color:hsl(233, 26%, 24%);
    text-decoration:none;
    font-weight:400;
`

const DropDownNav = (props) => {
    return (
        <>
            <DropDown drop={props.toogleIcon}>
                <LinksContainer>
                    {menuLinks.map((items,index)=>(
                        <Links key={index} href={items.route}>{items.tittle}</Links>
                    ))}
                <Color drop={props.toogleIcon}/>
                </LinksContainer>
            </DropDown>
        </>
    )
}

export default DropDownNav
