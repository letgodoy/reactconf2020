import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle } from './breakpoints'
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-cib/whatsapp';


const ContactStyle = styled.div`
    padding: 0;
    color: ${Colors.White};

`

const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
    margin: auto;
`

const ContactContent = styled.div`
    margin: 100px auto;
    text-align: center;
`

const ContactTitle = styled.h2`
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
margin: 30px;
`

const Contact = () => <ContactStyle id="Contact">
    <Content>
        <ContactTitle>Contato</ContactTitle>
        <ContactContent>
            <Button href="mailto:reactconfbr@gmail.com" target="_blank" rel="noreferrer">Enviar e-mail</Button>
            <Button href="https://api.whatsapp.com/send?phone=5511952781145&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20a%20React%20Conf%20Brasil" target="_blank" rel="noreferrer">Enviar mensagem <Icon icon={whatsappIcon} /></Button>
        </ContactContent>
    </Content>
</ContactStyle>

export default Contact