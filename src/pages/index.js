import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Work from '../components/work'
import Home from '../components/home'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Home />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
