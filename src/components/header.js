import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const navItems = [
  {
    name: "about",
    link: "#about",
  },
  {
    name: "work",
    link: "#work",
  },
  {
    name: "contact",
    link: "#contact"
  }
]
const Header = ({ siteTitle }) => (
  <header className="w-full sticky top-0 z-50 py-3">
    <nav className="flex flex-row m-4 justify-between">
      <Link to="/">
        <h1 className="text-4xl header">{siteTitle}</h1>
      </Link>
      <div className="mt-2 flex flex-row gap-4">
        {navItems.map(item => {
          return <AnchorLink to={item.link}>{item.name}</AnchorLink>
        })}
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
