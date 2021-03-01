import {createGlobalStyle} from 'styled-components'

// const colores = { 
//     primarios:{
//         DarkBlue : 'hsl(233, 26%, 24%)',
//         LimeGreen: 'hsl(136, 65%, 51%)',
//         BrightCyan:'hsl(192, 70%, 51%)'
//     },
//     neutrales:{
//         GrayishBlue: 'hsl(233, 8%, 62%)',
//         LightGrayishBlue: 'hsl(220, 16%, 96%)',
//         VeryLightGray: 'hsl(0, 0%, 98%)',
//         White: 'hsl(0, 0%, 100%)'
//     }
// }

export const GlobalStyle = createGlobalStyle`
    body,html{
        font-size: 18px;
        margin:0;
        padding:0;
        font-family: 'Public Sans', sans-serif;
    }
    

`

