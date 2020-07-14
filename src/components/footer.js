import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors, BiggerThanMedium } from './breakpoints'
// import { Icon } from '@iconify/react';

const FooterStyle = styled.footer`
    max-width: 100vw;
    background-color: ${Colors.Black};
    line-height: 28px;
    color: ${Colors.White};
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 3em;
`

const FooterColumn = styled.div`
    flex: 1;
    justify-content: center;
    /* flex-basis: 100vw; */
    margin: 20px 5px;
    padding: 0;

`

const Footer = () => <FooterStyle>
        <FooterColumn>
            <p>#reactconfbr</p>
            <p>React Brasil</p>
            <p>Tradutor?</p>
        </FooterColumn>
        <FooterColumn>
            <p>Compromisso</p>
            <a href='https://github.com/nic/reactconf.com.br/raw/master/public/files/React_ManualConduta.pdf' target='_blank' rel="noreferrer">Código de conduta</a>
        </FooterColumn>
        <FooterColumn>
            <p>Branding: Senai</p>
            <p>Criado com Gatsby e Styled-components</p>
            <p>Desenvolvidor com S2 por @letgodoy</p>
            <p>React Conferences</p>
        </FooterColumn>
</FooterStyle>

export default Footer