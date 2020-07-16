import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle } from './breakpoints'

const CommunitStyle = styled.div`
    padding: 0;
    color: ${Colors.White}; 
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
`


const CommunitContent = styled.div`
    text-align: center;

    ${BiggerThanMedium} {
        margin-top: 100px;
        margin-bottom: 100px;
    }
`

const CommunitTitle = styled.h2`
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

const Button = styled.a`
${ButtonStyle}
`

const Communit = () => <CommunitStyle id="Communit">
    <Content>
        <CommunitTitle>Comunidade</CommunitTitle>
        <CommunitContent>
            redes sociais
            
            meetups
        </CommunitContent>
    </Content>
</CommunitStyle>

export default Communit