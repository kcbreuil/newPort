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
import {FaGithubAlt} from 'react-icons/fa'

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
        className="sticky top-0 z-50"
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div>
        <main className="relative">{children}</main>
        <footer className="flex flex-row gap-4 absolute bottom-0 m-4 right-1/2">
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
