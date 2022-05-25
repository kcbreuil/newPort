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
const Header = ({ siteTitle, isScrolled }) => (
  <header className={`${isScrolled ? `bg-brand-blue`	: `transparent`} w-full sticky top-0 z-50 py-3`}>
    <nav className="flex flex-col md:flex-row m-4 md:justify-between justify-center items-center">
      <Link to="/">
        <StaticImage src="../images/KB_s_cherry.png" alt="logo" width={150}/>
      </Link>
      <div className="mt-2 flex flex-row gap-2 md:gap-4 text-brand-black">
        {navItems.map(item => {
          return <AnchorLink className="hover:underline decoration-wavy decoration-brand-yellow text-3xl" to={item.link}>{item.name}</AnchorLink>
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
