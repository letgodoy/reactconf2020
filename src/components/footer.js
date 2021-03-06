import React from "react"
import styled from "styled-components"
import { Colors } from './breakpoints'
// import { Icon } from '@iconify/react';

const FooterStyle = styled.footer`
    max-width: calc(100vw - 4em);
    background-color: ${Colors.Black};
    line-height: 28px;
    color: ${Colors.White};
    padding: 2em;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 980px;
    margin: auto;
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const FooterColumn = styled.div`
    margin: 20px 5px;
    padding: 0;
`

const Footer = () => <FooterStyle>
    <Content>
        <FooterColumn>
            <p>#REACTCONFBR</p>
            <p>REACT BRASIL</p>
            {/* <p>Tradutor?</p> */}
        </FooterColumn>
        <FooterColumn>
            <p>COMPROMISSO</p>
            <p><a href='https://github.com/nic/reactconf.com.br/raw/master/public/files/React_ManualConduta.pdf' target='_blank' rel="noreferrer">Código de conduta</a></p>
        </FooterColumn>
        <FooterColumn>
            <p>Branding: <a href="https://informatica.sp.senai.br/" target='_blank' rel="noreferrer">Senai</a></p>
            <p>Criado com <a href="https://www.gatsbyjs.org/" target='_blank' rel="noreferrer">Gatsby</a></p>
            <p>Produção: Átomos Nativos</p>
            <p><a href="https://facebook.github.io/react/community/conferences.html" target='_blank' rel="noreferrer">Conferences React</a></p>
        </FooterColumn>
    </Content>
</FooterStyle>

export default Footer