import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'

function Menu() {
    // <HamburgerMenu />
    return (
        <header>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu