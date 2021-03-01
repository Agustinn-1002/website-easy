import React from 'react'
import { cardData } from '../data/WhyChooseEasybank'
import {
    SectionContainer,
    ArticleTittle,
    ArticleWhyChoose,
    Logo,
    WhyChooseContainer,
} from '../styled/SeccionStyled'
import LatestArticles from './LatestArticles'

const Section = (props) => {
    return (
        <SectionContainer onClick={props.toogleIcon? props.toogleNavIcon : null}>
            <ArticleTittle>
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </ArticleTittle>
            <ArticleWhyChoose>
                { cardData.map((items, index) => (
                    <WhyChooseContainer key={index}>
                        <Logo src={items.imageLogo}></Logo>
                        <h3>{items.tittleCard}</h3>
                        <p>{items.pCard}</p>
                    </WhyChooseContainer>
                )) }
            </ArticleWhyChoose>
            <LatestArticles  onClick={props.toogleIcon? props.toogleNavIcon : null}></LatestArticles>
        </SectionContainer>
    )
}

export default Section
