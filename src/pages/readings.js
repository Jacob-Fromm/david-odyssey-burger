import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import AstrologyImage from '../images/DAVID_ASTROLOGY.jpg'

export default function Readings(){
    return(
       <Layout >
        <div className="readings">
           <h1 className="about-title">READINGS</h1>
                <StaticImage src='../images/DAVID_ASTROLOGY.jpg' alt="photo of David Odsyssey holding a crystal ball" />
           <div className="readings-detail-info">
                <h3>For more information, contact David at <a href="mailto: adavidodyssey@gmail.com">adavidodyssey@gmail.com</a></h3>
           </div>
        </div>
       </Layout>
    )
}