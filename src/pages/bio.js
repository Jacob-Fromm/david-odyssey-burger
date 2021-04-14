import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
// import {instagram, twitter} from '@mdi/js'

export default function bio() {
    return(
        <Layout>
            <div className="bio-container">
            <div className="bio-image">
            <StaticImage 
                id="bio-image-main"
                src='../images/david-about.jpg'
                alt="photograph of David Odyssey by Greg Kramer"
                width={450}
                height={658}
                // layout="cover"
                placeholder="blurred"
            />
            <h6>Photograph courtesy Greg Kramer</h6>
            </div>
                <div className="bio-text">
                    <h2>ABOUT</h2>
                    <p>David got his start as a journalist, reviewing the latest Kylie Minogue releases for <em>Outsmart</em>, Houston’s LGBTQ magazine. Since then, he has written about his forays through the demimondes of Tel Aviv, Los Angeles and New York City, where he now lives.</p>

                    <p>As an editor at Time Out New York (2015–2019), and as a contributor to <em>DAZED</em>, <em>Vulture</em>, <em>EW</em>, <em>The InQueery</em> and other sites, he has brought attention to queer, alternative and emerging artistic scenes—from drag artists at Bushwig to skateboarders at Tompkins Square Park. Sandra Bernhard, Justin Vivian Bond, Laverne Cox and Charlene are among his favorite interview subjects.</p>

                    <p>At stages all over NYC, including The Duplex and Joe’s Pub, he has played host, shared stories, and performed disco sorcery, for the sake of his own healing and the bedazzlement of his audiences. On his podcast <em>The Luminaries</em>, he explores the cosmic makeup and origin stories of his guests and their greatest inspirations, and synthesizes his thoughts on pop culture and recovery.</p>
                </div>
            </div>
        </Layout>
    )
}
