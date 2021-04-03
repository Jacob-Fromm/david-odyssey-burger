import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import AstrologyImage from '../images/DAVID_ASTROLOGY.jpg'

export default function Readings(){
    return(
       <Layout >
        <div className="readings">
           <h1 className="about-title">READINGS</h1>
           <div className="readings-main">
           <div className="readings-image-and-description">
                {/* <StaticImage src='../images/DAVID_ASTROLOGY.jpg' alt="photo of David Odsyssey holding a crystal ball" /> */}
                <h3 id="readings-info">David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. All readings are new-user friendly, and conducted over Zoom. Options, rates and reading packages abound; sliding scale is available.<br></br>Contact <a href="mailto: adavidodyssey@gmail.com">adavidodyssey@gmail.com</a> to book a reading</h3>
            </div>
        </div>
        </div>
       </Layout>
    )
}