import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Background from '../images/027_GridScape3.jpg'

const Body = styled.div`
background-image: url(${Background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;

main {
  padding: 20px;
}
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
      <div>
        <main>{children}</main>
        <Footer />
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
