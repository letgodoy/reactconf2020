import React, { useState } from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle } from './breakpoints'
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-mdi/close';

const SpeakerStyle = styled.div`
    padding: 0;
    color: ${Colors.White}; 
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`

const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
`


const SpeakerContent = styled.div`
    text-align: center;
    width: 100%;

    p {
        width: 80%;
        text-align: right;
    }

    iframe {
        max-width: 100%;
        height: 50%;

        ${BiggerThanMedium} {
            width: 60vw;
            height: 56vh;
        }
    }

    div {
        margin: 50px auto;
    }

    ${BiggerThanMedium} {
        margin-top: 100px;
        margin-bottom: 100px;
    }
`

// const SpeakerTitle = styled.h2`
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

const Button = styled.button`
${ButtonStyle}
`

const ButtonLink = styled.a`
${ButtonStyle}
margin: 20px;
display: inline-block;
`

const Speaker = () => {
    const [videoDisplay, setVideoDisplay] = useState(false)

    return <SpeakerStyle id="Speaker">
        <Content>
            {/* <SpeakerTitle>Palestrantes</SpeakerTitle> */}
            <SpeakerContent>
                {!videoDisplay ? <Button onClick={() => setVideoDisplay(true)}>Quero ser um palestrante</Button> :
                    <>
                        <p><Icon icon={closeIcon} onClick={() => setVideoDisplay(false)} /></p>
                        <iframe title="manual" src="https://www.youtube.com/embed/5a_5QwpdTAU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div>
                            <ButtonLink href="https://reactconf.com.br/files/manual-c4p.pdf" target="_blank" rel="noopener">Download do manual</ButtonLink>
                            <ButtonLink href="mailto:c4p@reactconf.com.br" target="_blank" rel="noopener">Enviar e-mail</ButtonLink>
                        </div>
                    </>
                }
            </SpeakerContent>
        </Content>
    </SpeakerStyle>
}

export default Speaker