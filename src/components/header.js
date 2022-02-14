import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const navItems = [
  {
    name: "about",
    link: "#about",
  },
  {
    name: "work",
    link: "#work",
  },
]
const Header = ({ siteTitle }) => (
  <header className="w-full">
    <nav className="flex flex-row m-4 justify-between">
      <Link to="/">
        <h1 className="text-3xl">{siteTitle}</h1>
      </Link>
      <div className="mt-2 flex flex-row gap-4">
        {navItems.map(item => {
          return <Link to={item.link}>{item.name}</Link>
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
