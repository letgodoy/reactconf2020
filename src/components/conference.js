import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, GradientBorder } from './breakpoints'

const ConferenceVideo = styled.iframe`
    width: 30%;
    height: auto;
  ${GradientBorder}
`

const ConferenceContent = styled.div`
    width: 100%;
    flex: 1;
    flex-basis: 100%;
    color: ${Colors.White};
    margin-bottom: 50px;

    ${BiggerThanMedium} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const ConferenceText = styled.div`
    color: ${Colors.White};
    height: auto;
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: 2px;
    text-align: justify;
    text-shadow: 1px 1px 3px #111;
    background-color: rgba(0,0,0,0.7);
    padding: 30px;
    margin-bottom: 50px;
    ${GradientBorder}

    p:last-child {
        font-size: 12px;
    }

    ${BiggerThanMedium} {
        font-size: 18px;
        letter-spacing: 3px;

        p:last-child {
            font-size: 14px;
        }
    }
`

const ConferenceSubTitle = styled.h2`
    font-weight: 400;
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
    width: 100vw;
    max-width: 900px;
`

const ConferenceStyle = styled.div`
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
            <ConferenceVideo title="aftermovie2019" src="https://www.youtube.com/embed/sx-6ZElybpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <ConferenceVideo title="aftermovie2018" src="https://www.youtube.com/embed/x9K78rfG3bo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <ConferenceVideo title="aftermovie2017" src="https://www.youtube.com/embed/N-vACHJypCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </ConferenceContent>
    </Content>
</ConferenceStyle>

export default Conference