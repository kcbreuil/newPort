import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Work from '../components/work'
import Home from '../components/home'
import Project from '../components/project'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
