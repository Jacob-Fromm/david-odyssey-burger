import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


function Header({ siteTitle }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    menuOpen ?
      setMenuOpen(false) : setMenuOpen(true)
  }

  const linkStyles = {
    textDecoration: 'none',
    color: '#673AB7'
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
          className={menuOpen ? "burger-btn active" : "burger-btn"}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class={menuOpen ? "menu menu-active" : "menu"}>
          <ul>
            <Link to='/articles' style={linkStyles}>
              <li>Articles</li>
            </Link>
            <Link to='/podcast' style={linkStyles}>
              <li>Podcast</li>
            </Link>
            {/* <Link to='/astrology' style={linkStyles}>
              <li>Astrology Readings</li>
            </Link>
            <Link to='/contact' style={linkStyles}>
              <li>Contact</li>
            </Link> */}
            <Link to='/' style={linkStyles}>
              <li>Home</li>
            </Link>
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
