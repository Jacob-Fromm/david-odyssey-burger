import React from 'react'
import HeroImage from '../images/DAVID_SPLASH_PAGE_2.jpg'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'react-scroll'
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero" style={{
                width: '100vw',
                marginTop: '-80px',
                minWidth: '400px',
            }}>
<<<<<<< HEAD
            <Link className="hero-text" to="about" smooth duration={1000} />
                <div>
=======
            <Link to="about" smooth duration={1000}>
                <div className="hero-text" >
>>>>>>> 546edecec2f162cc1b9c4bc2d9610825bd11014f
                    <h2><em>Welcome to the world of</em></h2>
                    <h1>DAVID <br></br>ODYSSEY</h1>
                </div>
                </Link>
            </div>
        </section>
    )
}
export default Hero