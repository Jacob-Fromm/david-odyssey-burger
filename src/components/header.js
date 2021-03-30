import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"


function Header({ siteTitle }) {

  const [ menuOpen, setMenuOpen] = useState(false)
  
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  return(
    <header
      style={{
        background: `pink`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        
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
