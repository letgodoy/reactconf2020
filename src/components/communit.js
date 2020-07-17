import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors, ButtonStyle, BiggerThanSmall, BiggerThanLarge } from './breakpoints'
import { MeetupList } from "./listsArrays"
import { Icon } from '@iconify/react';
import bxlSlack from '@iconify/icons-bx/bxl-slack';
import bxlTwitter from '@iconify/icons-bx/bxl-twitter';
import bxlGithub from '@iconify/icons-bx/bxl-github';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';

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
margin: 100px auto;
    div {
        margin: 100px auto;
    }

    ${BiggerThanMedium} {
        
    }
`

const CommunitTitle = styled.h2`
    font-weight: 600;
    font-size: 28px;
    color: ${Colors.White};
    text-transform: uppercase;
    text-align: center;

    ${BiggerThanMedium} {
        font-size: 50px;
        line-height: 2em;
    }
`

const SocialButton = styled.a`
    margin: 20px;
    color:  #743ad5;

    svg {
        filter: drop-shadow(0 0 5px black);
        width: 35px;
        height: 35px;
    }

    ${BiggerThanMedium} {
        margin: 30px;

        svg {
            width: 50px;
            height: 50px;
        }
    }


`

const Button = styled.a`
${ButtonStyle};
margin: 10px;
display: inline-flex;
width: 60%;
font-size: small;
`

const ListMeetups = styled.ol`
    width: 100%;
    margin: 0 auto 15px auto;
    text-align: center;
    list-style-type: none;
    columns: 1;
    column-gap: 10px;
    padding: 0;

    ${BiggerThanSmall} {
      columns: 2;
    }

    ${BiggerThanLarge} {
      columns: 3;
    }
`

const Communit = () => <CommunitStyle id="Communit">
    <Content>
        <CommunitTitle>Comunidade</CommunitTitle>
        <CommunitContent>
            <div>
                <SocialButton href="https://react.now.sh/" target="_blank" rel="noreferrer"><Icon icon={bxlSlack} /></SocialButton>
                <SocialButton href="http://twitter.com/reactconfbr" target="_blank" rel="noreferrer"><Icon icon={bxlTwitter} /></SocialButton>
                <SocialButton href="https://github.com/react-brasil" target="_blank" rel="noreferrer"><Icon icon={bxlGithub} /></SocialButton>
                <SocialButton href="https://www.facebook.com/reactconf/" target="_blank" rel="noreferrer"><Icon icon={bxlFacebook} /></SocialButton>
                <SocialButton href="https://www.instagram.com/reactconfbr/" target="_blank" rel="noreferrer"><Icon icon={bxlInstagram} /></SocialButton>
            </div>
            <div>
                <ListMeetups>
                    {MeetupList.map((meetup, index) =>
                        <li key={index}><Button href={meetup.link} target="_blank" rel="noreferrer">{meetup.name}</Button></li>
                    )}
                </ListMeetups>

            </div>
        </CommunitContent>
    </Content>
</CommunitStyle>

export default Communit