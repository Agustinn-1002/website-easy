import React from 'react'
import Button from './Button'
import {
    HeaderContainer,
    BgImageFondo,
    BgPhone,
    InfoHeader,
} from '../styled/HeaderStyled'

const Header = (props) => {
    return (
        <HeaderContainer onClick={props.toogleIcon? props.toogleNavIcon : null}>
            <BgImageFondo />
            <BgPhone />
            <InfoHeader>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button />
            </InfoHeader>
        </HeaderContainer>
    )
}

export default Header
