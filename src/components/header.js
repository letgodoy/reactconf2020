import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from "./breakpoints"
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';

const Menu = styled.header`
  transition: background-color .2s linear;
  z-index: 99 !important;
  /* background-color: ${Colors.Black}; */
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;

  ${BiggerThanMedium} {
    justify-content: end;
    text-align: right;
  }
`

const Navbar = styled.nav`
  margin: 0;
  width: calc(100vw - 50px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: auto;

  ${BiggerThanMedium} {
    width: auto;
    max-width: 1170px;
    display: inline-flex;
    margin-left: auto;
    margin-right: 30px;
    flex-direction: row;
  }
`

const ListLinks = styled.div`
    flex: 1;
    display: ${({ isOpenMenu }) => isOpenMenu ? 'flex' : 'none'};
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: end;
    padding-left: 2em;
    width: fit-content;

    ul {
      display: ${({ isOpenMenu }) => isOpenMenu ? 'flex' : 'none'};
      list-style-type: none;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: end;
      padding: 0;
    }


    ${BiggerThanMedium} {
      display: inline-flex;
      height: auto;
      padding: 0;

      ul {
        display: inline-flex;
        justify-content: space-around;
        flex-direction: row;
        padding: 0;
      }
      
    }

    li {
       a {
        font-size: 13px;
        line-height: 40px;
        color: #fff;
        font-weight: 400;
        transition: color .2s linear;
        text-transform: uppercase;
        letter-spacing: 0.03cm;
        margin: 0 10px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
`

const MenuMobile = styled.div`
  flex: 1;
  width: 100%;
  font-weight: 700;
  font-size: 30px;
  padding: 15px;
  transition: color .2s linear;
  color: #fff;
  cursor: pointer;
  text-align: right;
  margin-left: auto;

  ${BiggerThanMedium} {
    display: none;
  }
`

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return <Menu>
    <Navbar>
      <MenuMobile onClick={() => setIsOpenMenu(!isOpenMenu)}><Icon icon={menuIcon} /></MenuMobile>
      <ListLinks isOpenMenu={isOpenMenu}>
        <ul>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#conference">A Conf</Link></li>
          <li><Link to="#Speaker">C4P</Link></li>
          <li><Link to="#Sponsor">Patrocínio</Link></li>
          <li><Link to="#Contact">Contato</Link></li>
        </ul>
      </ListLinks>
    </Navbar>
  </Menu>
}

export default Header
