/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FiGithub, FiLinkedin } from "react-icons/fi"

import Header from "./header"
import "./layout.css"

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
    <>
      <Header
        className=""
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div>
        <main className="relative">{children}</main>
        <footer className="flex flex-row justify-center gap-4 sticky bottom-0 py-4">
          <a href="https://github.com/kcbreuil"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/kaitlynbreuil/"><FiLinkedin /></a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
