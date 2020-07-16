import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import Contact from "../components/contact"
import Event from "../components/event"
import Conference from "../components/conference"
import Speaker from "../components/speaker"
import Sponsor from "../components/sponsor"
import Communit from "../components/communit"

const IndexPage = () => (
  <Layout>
    <SEO title="React Conf 2020" />

    <Home />

    <Conference />

    <Event />

    <Speaker />

    <Sponsor />

    <Communit />

    <Contact />
    
  </Layout>
)

export default IndexPage
