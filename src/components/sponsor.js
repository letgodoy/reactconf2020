import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle } from './breakpoints'

const SponsorStyle = styled.div`
    padding: 0;
    color: ${Colors.White}; 
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
`


const SponsorContent = styled.div`
    text-align: center;

    ${BiggerThanMedium} {
        margin-top: 100px;
        margin-bottom: 100px;
    }
`

// const SponsorTitle = styled.h2`
//     width: 100%;
//     flex: 1;
//     flex-basis: 100%;
//     font-weight: 600;
//     font-size: 35px;
//     color: ${Colors.White};
//     text-transform: uppercase;

//     ${BiggerThanMedium} {
//         font-size: 50px;
//         line-height: 2em;
//         text-align: center;
//     }
// `

const Button = styled.a`
${ButtonStyle}
`

const Sponsor = () => <SponsorStyle id="Sponsor">
    <Content>
        {/* <SponsorTitle>Patrocinadores</SponsorTitle> */}
        <SponsorContent>
            <Button href="mailto:reactconfbr@gmail.com" target="_blank" rel="noreferrer">Quero ser um patrocinador</Button>
        </SponsorContent>
    </Content>
</SponsorStyle>

export default Sponsor