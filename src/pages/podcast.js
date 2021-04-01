import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'react-scroll'
import Layout from '../components/layout'
import podcastImage from '../images/podcast-image.jpg'

export default function Podcast() {
    return (
        <Layout >
            <div className="podcast-text">
                <h2>Subscribe: <a className="link-btn" href='https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824'>Apple</a><a className="link-btn" href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg">Spotify</a></h2>
            <Link to="iframe-container" smooth duration={1000}>
                <h1 id="listen-btn">Listen Now</h1>
            </Link>
               
            </div>
            <StaticImage src='../images/podcast-image.jpg'/>
        <div className="podcast">
            {/* <h1>The Luminaries Podcast</h1> */}
                <h4>Embark on a cosmic voyage through the worlds of astrology, tarot, film, TV, comic books and far beyond, as host David Odyssey and a pantheon of guests unleash the waters of queer consciousness.</h4>
            <div id="iframe-container">
                <iframe className="iframe" title="Podcast-Player" frameborder="10" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482" ></iframe>
            </div>
        </div>
        </Layout>
    )
}