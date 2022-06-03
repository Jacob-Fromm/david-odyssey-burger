import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'

// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faTwitter, faTwitterSquare, instagram, twitter} from '@fortawesome/free-brands-svg-icons'
import { faNewspaper, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
            <h6><a href="https://www.gregorykramer.com/">Photograph courtesy Greg Kramer</a></h6>
            </div>
                <div className="bio-text">
                    <h2 id="bio-title">ABOUT</h2>
                    <p>David got his start as a journalist, reviewing the latest Kylie Minogue releases for <em>Outsmart</em>, Houston’s LGBTQ magazine. Since then, he has written about his forays through the demimondes of Tel Aviv, Los Angeles and New York City, where he now lives.</p>

                    <p>As an editor at Time Out New York (2015–2019), and as a contributor to <em>DAZED</em>, <em>Vulture</em>, <em>EW</em>, <em>The InQueery</em> and other sites, he has brought attention to queer, alternative and emerging artistic scenes—from drag artists at Bushwig to skateboarders at Tompkins Square Park. Sandra Bernhard, Justin Vivian Bond, Laverne Cox and Charlene are among his favorite interview subjects.</p>

                    <p>At stages all over NYC, including The Duplex and Joe’s Pub, he has played host, shared stories, and performed disco sorcery, for the sake of his own healing and the bedazzlement of his audiences. On his podcast <em>The Luminaries</em>, he explores the cosmic makeup and origin stories of his guests and their greatest inspirations, and synthesizes his thoughts on pop culture and recovery.</p>
               <div className="socials">
                   <a href="https://davidodyssey.substack.com/">
                   <div id="newsletter" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesomeIcon id="newsletter-icon" icon={faNewspaper} size="2x" color="#fdc1d3" />
                        <h5 >Subscribe to David's Newsletter</h5>
                    </div>
                    </a>
                    <a href="mailto: adavidodyssey@gmail.com">
                   <div id="twitter" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesomeIcon id="twitter-icon" icon={faPaperPlane} size="2x" color="#fdc1d3"/>
                        <h5>Email David</h5>
                    </div>
                    </a>
                    {/* <a href="https://twitter.com/adavidodyssey">
                   <div id="newsletter" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesomeIcon id="newsletter-icon" icon={faNewspaper} size="2x" color="#fdc1d3"/>
                        <h5>Subscribe to David's Newsletter</h5>
                    </div>
                    </a> */}
               </div>
                </div>
            </div>
        </Layout>
    )
}
