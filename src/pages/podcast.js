import React from 'react'
import Layout from '../components/layout'

export default function Podcast() {
    return (
        <Layout >
        <div className="podcast">
            <h1>The Luminaries Podcast</h1>
            <div className="podcast-text">
                <h2>Subscribe: <a className="link-btn" href='https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824'>Apple</a><a className="link-btn" href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg">Spotify</a></h2>
            </div>
                <h4>Embark on a cosmic voyage through the worlds of astrology, tarot, film, TV, comic books and far beyond, as host David Odyssey and a pantheon of guests unleash the waters of queer consciousness.</h4>
            <iframe className="iframe" title="Podcast-Player" frameborder="0" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482"></iframe>
        </div>
        </Layout>
    )
}