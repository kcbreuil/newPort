import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

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
        <StaticImage src="../images/KB_s_cherry.png" alt="logo" width={100}/>
      </Link>
      <div className="mt-2 flex flex-row gap-4">
        {navItems.map(item => {
          return <AnchorLink className="hover:underline decoration-wavy decoration-brand-yellow" to={item.link}>{item.name}</AnchorLink>
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
