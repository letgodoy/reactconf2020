import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'

const SponsorStyle = styled.div`
    padding: 0;
    background-color: ${Colors.Black}; 
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1200px;
`

// const SponsorText = styled.div`
//     background-color: ${Colors.Blue};
//     font-family: 'Montserrat', sans-serif; 
//     flex: 1;

// ${BiggerThanMedium} {
//     flex: 3;
//     position: sticky;
//     position: -webkit-sticky;
//     top: 72px;
//     height: 375px;
//     font-size: 24px;
//     padding-bottom: 10px;
// }
// `

const SponsorContent = styled.div`
    flex: 1;
    background-color: ${Colors.White};
    padding: 2em;

    ${BiggerThanMedium} {
        display: inline-flex;
        flex-wrap: wrap;
        margin-top: 100px;
        justify-content: space-between;
    }
`

const SponsorTitle = styled.h2`
    width: 100%;
    flex: 1;
    flex-basis: 100%;
    font-weight: 600;
    font-size: 35px;
    color: ${Colors.White};
    text-transform: uppercase;

    ${BiggerThanMedium} {
        font-size: 50px;
        line-height: 2em;
        text-align: center;
    }
`

const Sponsor = () => <SponsorStyle id="Sponsor">
    <Content>
        <SponsorTitle>Patrocinadores</SponsorTitle>
        {/* <SponsorText>
        parte que fica fixa
            <p>A maior conferência do ecossistema React da América Latina. Como nas conferências dos Estados Unidos e Europa, reunimos desenvolvedores, empresas e estudantes de tecnologia para compartilhar experiências no desenvolvimento de aplicações reativas.</p>
            <p>React Native, GraphQL, Apollo, Jest, Reason, Docz, Redux, Relay, Flow, RxJS, Styled Components, Router, Navigation, Enzyme, Node, TypeScript, Deno, Webpack, Wasm, Prepack, Storybook, Reselect, Sagas, Thunk, Next, Logics, Immutable, React VR, MobX, Mocha, CSSModules, JSS, Actionz, Redux Form, Flux, Nightwatch, Mocha, Ramda, Glamorous, Reflux, Observable, Inferno, Lodash, Isomorphic, SSR, Babel, Leaflet.</p>
        </SponsorText> */}
        <SponsorContent>
            <p>contato por email</p>
            <p>contato por whastapp</p>
        </SponsorContent>
    </Content>
</SponsorStyle>

export default Sponsor