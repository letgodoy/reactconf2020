import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from "./breakpoints"
import backgroundWide from '../images/leaocolorido-wide2.jpg'
import backgroundPort from '../images/leaocolorido-portrait.jpg'

const HomeStyle = styled.div`
    height: calc(100vh - 6em);
    background-color: ${Colors.White}; 
    background-image: url(${backgroundPort});
    background-repeat: repeat; 
    background-position: center top; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;

    ${BiggerThanMedium} {
        background-image: url(${backgroundWide});
        padding: 4em 2em 3em 2em;
    }
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 960px;
    text-align: center;
    justify-content: center;
    align-items: center;

    iframe {
        width: 100%;
        height: 50%;

        ${BiggerThanMedium} {
            height: 66%;
        }
    }
`

const Home = () => <HomeStyle id="home">
    <Content>
        <iframe title="warning" src="https://www.youtube.com/embed/dNKWHR9615g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Content>
</HomeStyle>

export default Home