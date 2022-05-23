/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FiGithub, FiLinkedin } from "react-icons/fi"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        isScrolled={isScrolled}
      />
      <div>
        <main className="relative">{children}</main>
        <footer className={`${isScrolled ? `bg-brand-pink`	: `transparent`} flex flex-row justify-center gap-4 sticky bottom-0 py-4`}>
          <a href="https://github.com/kcbreuil">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaitlynbreuil/">
            <FiLinkedin />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
