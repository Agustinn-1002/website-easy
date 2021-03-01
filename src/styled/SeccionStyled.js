import styled from 'styled-components'

const desktop = '426'; 

export const SectionContainer = styled.section`
    background:hsl(220, 16%, 96%);
    width:100%;
    padding-top:2rem;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
@media(min-width:${desktop}px){       

}
`;
export const ArticleTittle = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-bottom:1rem;
    h2{
        padding:0 3rem;
        color:hsl(233, 26%, 24%);
        font-weight:400;
        margin-bottom:10px;
    }
    p{
        padding:0 1rem;
        font-weight:300;
        font-size:.85rem;
        line-height:1.5rem;
        color:hsl(233, 8%, 62%);
    }
@media(min-width:${desktop}px){       
    align-items:start;
    text-align:start;
    width:83%;
    h2{
        padding:0;
    }
    p{
        padding:0;
        width:45%;
    }
}
`;
export const ArticleWhyChoose = styled.section`
@media(min-width:${desktop}px){  
    width:83%;
    display:grid;
    grid-template-columns:repeat(4,15.6rem);
    grid-column-gap:1rem;
}

`;
export const WhyChooseContainer = styled.div`
    text-align:center;
    margin-top:2rem;
    h3{
        padding:0 3rem;
        color:hsl(233, 26%, 24%);
        font-weight:400;
        margin-bottom:10px;
    }
    p{
        padding:0 1rem;
        font-weight:300;
        font-size:.85rem;
        line-height:1.5rem;
        color:hsl(233, 8%, 62%);
    }
@media(min-width:${desktop}px){  
    text-align:start;
    h3{
        padding:0;
    }
    p{  
        padding:0;
    }
}
`;
export const Logo = styled.img``;