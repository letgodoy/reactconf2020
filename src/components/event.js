import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'

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
    position: sticky;
    position: -webkit-sticky;
    top: 72px;
    height: 375px;
    font-size: 24px;
    padding: 2em;
}
`

const EventContent = styled.div`
    color: ${Colors.White};
    padding: 2em;

    ${BiggerThanMedium} {
        display: inline-flex;
        flex-wrap: wrap;
        margin-top: 200px;
        justify-content: space-between;
    }
`

const EventTitle = styled.h2`
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

const EventVideo = styled.div`
    flex-basis: 100%;
    color: ${Colors.BlackText};
    text-align: justify;
`

const ServiceItemTitle = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 1em;
    letter-spacing: 3px;
`

const Event = () => {
    const [sendLabel, setSendLabel] = useState("Inscrever-se")
    const [resultSend, setResultSend] = useState("")
  
    useEffect(() => {
        if (resultSend !== "") window.setTimeout(() => setResultSend(""), 2000)
    }, [resultSend])
  
    const sendEmail = (e) => {
  
      setSendLabel("Carregando ...")
      var service_id = "default_service";
      var template_id = "default";
      e.preventDefault();
  
    //   emailjs.sendForm(service_id, template_id, e.target, 'user_s5zmGRTCnbORHAz30rS2n')
    //     .then((result) => {
    //       console.log(result.text);
    //       setResultSend(result.text)
    //       setSendLabel("Enviado")
    //     }, (error) => {
    //       console.log(error.text);
    //       setResultSend(error.text)
    //       setSendLabel("Erro")
    //     });
    }
  
    return <EventStyle id="Event">
    <Content>
        <EventTitle>React Conf BR 2020</EventTitle>
        <EventText>
            <p>21 de novembro de 2020</p>
            <p>Local: Aonde voce se sentir mais confortavel.</p>
            <p>Seja um patrocinador</p>
        </EventText>
        <EventContent>
        <form onSubmit={sendEmail}>
              <p><input id="name" type="text" name="name" placeholder="Nome Completo" required /></p>
              <p><input id="contact-email" type="email" name="email" placeholder="E-mail" required /></p>
              <p><input id="contact-email" type="phone" name="phone" placeholder="Celular" /></p>
              <p><input id="subject" type="text" name="location" placeholder="Cidade/Estado" required /></p>
              <p><input id="subject" type="text" name="slack" placeholder="Usuario no Slack" required /></p>
              <p><input id="subject" type="text" name="terms" placeholder="concorda com os termos link pros termos ou popup?" required /></p>
              <p><input type="submit" value={sendLabel} /></p>
            </form>
        </EventContent>
    </Content>
</EventStyle>
}

export default Event