import React from 'react'
import styled from 'styled-components'
import { articlescard } from '../data/LatestArticles';

const desktop = '426';

const LatestArticle = styled.article`
    width:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:3.5rem;
    padding-top:4rem;
@media(min-width:${desktop}px){
    justify-content:start;
    align-items:start;
}
`;
const Title = styled.h2`
    margin-left:7rem;
    color:hsl(233, 26%, 24%);
    font-size:1.7rem !important;
    font-weight:400;
    margin-bottom:-0.2rem;
`;
const Articles = styled.div`
    width:90%;
    margin-top:2rem;
@media(min-width:${desktop}px){
    margin-left:7rem;
    display:grid;
    grid-template-columns:repeat(4,14.6rem);
    grid-column-gap:2rem;
    text-align:start;
}
`;

const ImageArticle = styled.img`
    width:100%;
    height:200px;
    object-fit:cover;
    border-radius:5px 5px 0 0;
`;
const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem 1.5rem;
    h4{
        font-weight:300;
        font-size:.9rem;
        margin:3px 0 0;
        line-height:1.2rem;
    }
    p{
        font-size:.7rem;
        line-height:1rem;
        color:hsl(233, 8%, 62%);
    }
`;
const Autor = styled.p`
    font-size:.56rem !important;
    color:hsl(233, 8%, 62%);
`;


const LatestArticles = () => {
    return (
        <LatestArticle>
            <Title>Latest Articles</Title>
            <Articles>
            {articlescard.map((items, index) => (
                <div key={index}>
                    <ImageArticle src={items.image} />
                    <InfoCard>
                        <Autor>{items.autor}</Autor>
                        <h4>{items.tittle}</h4>
                        <p>{items.parrafo}</p>
                    </InfoCard>
                </div>
            ))}
           </Articles>
        </LatestArticle>
    )
}

export default LatestArticles
