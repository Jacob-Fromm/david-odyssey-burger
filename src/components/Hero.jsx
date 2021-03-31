import React from 'react'
import HeroImage from '../images/DAVID_SPLASH_PAGE_2.jpg'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'react-scroll'
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero" style={{
                width: '100vw'
            }}>
                <div className="hero-text" >
                    <Link to="about-section" smooth duration={1000}>
                    <h2>Welcome to the world of</h2>
                    <h1>DAVID ODYSSEY</h1>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Hero