import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'react-scroll'
import Layout from '../components/layout'
import podcastImage from '../images/podcast-image.jpg'

export default function Podcast() {
    return (
        <Layout >
            <div className="podcast-header">
                {/* <h1>The Luminaries Podcast</h1> */}
                <Link to="iframe-container" smooth duration={1000}>
                    {/* <h1>The Luminaries Podcast</h1> */}
                    <h1 id="listen-btn"><em>The Luminaries</em> - Listen Now</h1>
                </Link> 
            </div>
            <StaticImage 
                className='podcast-image'
                src='../images/podcast-image.jpg'
                placeholder="blurred"
                layout="fullWidth"
                width={1000}
                />
            <div className="podcast-links">
                <a className="link-btn" href='https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824' style={{
                    'paddingBottom': 0
                }}>Subscribe - Apple</a><a className="link-btn" href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg">Subscribe - Spotify</a>
            </div>
        <div className="podcast">
            <h4>Embark on a cosmic voyage through the worlds of astrology, tarot, film, TV, comic books and far beyond, as host David Odyssey and a pantheon of guests unleash the waters of queer consciousness.</h4>
            <iframe title="The Luminaries Podcast by David Odyssey" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482" frameborder="0"></iframe>
        </div>
            
           
        </Layout>
    )
}