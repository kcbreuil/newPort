import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Work from '../components/work'
import Home from '../components/home'
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
