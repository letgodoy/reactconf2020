import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Contact from "../components/contact"
import Event from "../components/event"
import Conference from "../components/conference"
import Speaker from "../components/speaker"
import Sponsor from "../components/sponsor"

const IndexPage = () => (
  <Layout>
    <SEO title="React Conf 2020" />

    <Home />

    <Conference />

    <Event />

    <Speaker />

    <Sponsor />

    <About />

    <Contact />
    
  </Layout>
)

export default IndexPage
