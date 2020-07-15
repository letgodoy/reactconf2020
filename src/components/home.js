import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from "./breakpoints"

const HomeStyle = styled.div`
    height: 100vh;
    background-repeat: repeat; 
    background-position: center top; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    iframe {
        max-width: 100%;
        height: 50%;

        ${BiggerThanMedium} {
            width: 100%;
            height: 86%;
        }
    }
`

const Home = () => <HomeStyle id="home">
    <Content>
        <iframe title="warning" src="https://www.youtube.com/embed/dNKWHR9615g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Content>
</HomeStyle>

export default Home