import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


function Header({ siteTitle }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    menuOpen ?
      setMenuOpen(false) : setMenuOpen(true)
  }

  return(
    <header >
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `1.45rem 1.0875rem`,
        // }}
      >
        <button
          class={menuOpen ? "burger-btn active" : "burger-btn"}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class={menuOpen ? "menu menu-active" : "menu"}>
          <ul>
            <li>Articles</li>
            <li>Podcast</li>
            <li>Astrology Readings</li>
            <li>Contact</li>
          </ul>
        </nav>
        {/* <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
      
          </Link>
        </h1> */}
        
      </div>
    </header>
  )
          }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
