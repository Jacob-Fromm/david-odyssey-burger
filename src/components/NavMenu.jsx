import React, {useState} from "react"
import { Link } from "gatsby"

export default function NavMenu() {
    
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
      <div className="burger-div"
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
            <Link to='/readings' style={linkStyles}>
              <li>Readings</li>
            </Link>
            <Link to='/' style={linkStyles}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
}