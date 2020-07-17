import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle, GradientBorder } from './breakpoints'

const ButtonSingup = styled.a`
 width: 80%;
         margin: auto;
         ${ButtonStyle}
`

const Map = styled.iframe`
    width: 80%;
    height: 50vh;
    margin: auto;
    ${GradientBorder}
`

const EventStyle = styled.div`
    padding: 0;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100vw;
    max-width: 900px;
`

const EventText = styled.div`
    color: ${Colors.White};
    padding: 1em;

${BiggerThanMedium} {
    font-size: 50px;
    line-height: 70px;
    text-align: center;
}
`

const EventContent = styled.div`
    color: ${Colors.White};

    ${BiggerThanMedium} {
        margin: 50px auto;
    }
`

const EventTitle = styled.h2`
    font-weight: 600;
    font-size: 35px;
    color: ${Colors.White};
    text-transform: uppercase;

    ${BiggerThanMedium} {
        font-size: 50px;
        line-height: 70px;
        text-align: center;
    }
`

const Event = () => {
    const [location, setLocation] = useState()

    const getLocation = () => navigator.geolocation ?
            navigator.geolocation.getCurrentPosition((position) => showPosition(position))
        : setLocation("Geolocation is not supported by this browser.")

    const showPosition = (position) => 
        setLocation(`${position.coords.latitude},${position.coords.longitude}`)

    return <EventStyle id="Event">
        <Content>
            <EventTitle>React Conf BR 2020</EventTitle>
            <EventText>
                <p>21 de novembro de 2020</p>

                {location ? <Map
                    frameborder="0"
                    scrolling="no"
                    src={`https://maps.google.com/maps?q=${location}&hl=pt-br&z=14&amp;&output=embed`}
                >
                </Map> :
                    <ButtonSingup onClick={() => getLocation()}>Clique aqui para ver a localização</ButtonSingup>
                }
            </EventText>
            <EventContent>
                <EventText>
                    <ButtonSingup href="https://www.sympla.com.br/react-conf-brasil-2020__910432" target="_blank" rel="noreferrer">Quero me inscrever</ButtonSingup>
                </EventText>
            </EventContent>
        </Content>
    </EventStyle>
}

export default Event