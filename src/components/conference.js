import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'

const ConferenceVideo = styled.iframe`
    width: 100%;
    height: auto;
`

const ConferenceContent = styled.div`
    flex: 1;
    padding: 2em;
    color: ${Colors.White};

    ${BiggerThanMedium} {
        display: flex;
        flex-wrap: wrap;
        margin-top: 100px;
        justify-content: space-between;
    }
`

const ConferenceText = styled.div`
    flex: 1;
    flex-basis: 100%;
    color: ${Colors.White};
    height: auto;
    font-size: 14px;
    padding: 2em;
    line-height: 1.8em;
    letter-spacing: 2px;
    text-align: justify;

${BiggerThanMedium} {
    flex: 2;
    padding: 3em;
    position: sticky;
    position: -webkit-sticky;
    top: 72px;
    font-size: 20px;
}
`

const ConferenceSubTitle = styled.h2`
    width: 100%;
    flex: 1;
    flex-basis: 100%;
    font-weight: 600;
    font-size: 14px;
    color: ${Colors.White};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 2em;

    ${BiggerThanMedium} {
        font-size: 24px;
    }
`

const ConferenceTitle = styled.h2`
    width: 100%;
    flex: 1;
    flex-basis: 100%;
    font-weight: 600;
    font-size: 30px;
    color: ${Colors.White};
    text-align: center;
    text-transform: uppercase;

    ${BiggerThanMedium} {
        font-size: 40px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1200px;
`

const ConferenceStyle = styled.div`
    padding: 0;
    background-color: ${Colors.Black}; 
    display: flex;
    justify-content: center;
`

const Conference = () => <ConferenceStyle id="conference">
    <Content>
        <ConferenceTitle>A Conferencia</ConferenceTitle>
        <ConferenceSubTitle>Bleeding Edge Development</ConferenceSubTitle>
        <ConferenceText>
            <p>A maior conferência do ecossistema React da América Latina. Como nas conferências dos Estados Unidos e Europa, reunimos desenvolvedores, empresas e estudantes de tecnologia para compartilhar experiências no desenvolvimento de aplicações reativas.</p>
            <p>React Native, GraphQL, Apollo, Jest, Reason, Docz, Redux, Relay, Flow, RxJS, Styled Components, Router, Navigation, Enzyme, Node, TypeScript, Deno, Webpack, Wasm, Prepack, Storybook, Reselect, Sagas, Thunk, Next, Logics, Immutable, React VR, MobX, Mocha, CSSModules, JSS, Actionz, Redux Form, Flux, Nightwatch, Mocha, Ramda, Glamorous, Reflux, Observable, Inferno, Lodash, Isomorphic, SSR, Babel, Leaflet.</p>
        </ConferenceText>
        <ConferenceContent>
            Como foi 2019
            <ConferenceVideo title="aftermovie2019" src="https://www.youtube.com/embed/sx-6ZElybpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </ConferenceVideo>
            Como foi 2018
            <ConferenceVideo title="aftermovie2018" src="https://www.youtube.com/embed/sx-6ZElybpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </ConferenceVideo>
            Como foi 2017
            <ConferenceVideo title="aftermovie2017" src="https://www.youtube.com/embed/sx-6ZElybpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </ConferenceVideo>
        </ConferenceContent>
    </Content>
</ConferenceStyle>

export default Conference