import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'react-scroll'
import Layout from '../components/layout'

export default function Podcast() {
    return (

        <Layout>
            <div className="bio-container">
            <div className="bio-image">
            <StaticImage 
                id="bio-image-main"
                src='../images/podcast-image.jpg'
                alt="photograph of David Odyssey by Greg Kramer"
                width={450}
                aspectRatio={1/1}
                // layout="cover"
                placeholder="blurred"
            />
            <h6><a href="http://www.colinverdi.com">Illustration courtesy Colin Verdi</a></h6>
            </div>
                <div id="podcast-text" className="bio-text">
                    <h2 id="podcast-title" style={{width:'250px'}}>PODCAST</h2>
                    <p><em>The Luminaries with David Odyssey</em> features the new gods of the comedy, drag, cabaret and literary scenes, sharing their life stories and celebrating the astrology of their greatest influences. New episodes available weekly on <a href="https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824">Apple Podcasts</a>, <a href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg&nd=1">Spotify</a>, and wherever podcasts are sold.</p>
                    <iframe title="The Luminaries Podcast by David Odyssey" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482" frameborder="no" scrolling="yes"></iframe>
                    <div className="podcast-btn-container">
                        <h3><a href="https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824">Subscribe on Apple</a></h3>
                        <h3><a href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg&nd=1">Subscribe on Spotify</a></h3>
                    </div>
                </div>
            </div>
        </Layout>
        // <Layout >
        //     <div className="podcast-header">
        //         {/* <h1>The Luminaries Podcast</h1> */}
        //         <Link to="iframe-container" smooth duration={1000}>
        //             {/* <h1>The Luminaries Podcast</h1> */}
        //             <h1 id="listen-btn"><em>The Luminaries</em> - Listen Now</h1>
        //         </Link> 
        //     </div>
        //     <StaticImage 
        //         className='podcast-image'
        //         src='../images/podcast-image.jpg'
        //         placeholder="blurred"
        //         layout="fullWidth"
        //         width={1000}
        //         />
        //     <div className="podcast-links">
        //         <a className="link-btn" href='https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824' style={{
        //             'paddingBottom': 0
        //         }}>Subscribe - Apple</a><a className="link-btn" href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg">Subscribe - Spotify</a>
        //     </div>
        // <div className="podcast">
        //     <h3>Embark on a cosmic voyage through the worlds of astrology, tarot, film, TV, comic books and far beyond, as host David Odyssey and a pantheon of guests unleash the waters of queer consciousness.</h3>
        //     <iframe title="The Luminaries Podcast by David Odyssey" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482" frameborder="0"></iframe>
        // </div>
            
           
        // </Layout>
    )
}