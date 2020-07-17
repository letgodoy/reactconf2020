import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Background from '../images/027_GridScape3.jpg'
import VideoBack from '../images/80s_01_4K.webm'

const Body = styled.div`
background-image: url(${Background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;

div {
  position: relative;
  top: 0;
}

main {
  padding: 20px;
  max-width: 100vw;
  overflow-x: hidden;
}
`

const Video = styled.video`
  position: fixed;
  right: auto;
  left: auto;
  top: 0;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Body>
      <Video id="background" loop={true} muted={true} autoPlay={true} controls={false} playsInline>
        <source src={VideoBack} type="video/webm" />
      </Video>
      <div>
        <main>{children}</main>
        <Footer />
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
