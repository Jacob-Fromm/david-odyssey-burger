import React from 'react'
import Layout from '../components/layout'

export default function Podcast() {
    return (
        <Layout >
        <div className="podcast">
            <h1>The Luminaries Podcast</h1>
            <h4><em>The Luminaries with David Odyssey</em> features the new gods of the comedy, drag, cabaret and literary scenes, sharing their life stories and celebrating the astrology of their greatest influences. Available on Apple Podcasts, Spotify, and wherever podcasts are sold. </h4>
                <h2>Subscribe: <a className="link-btn" href='https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824'>Apple</a><a className="link-btn" href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg">Spotify</a></h2>
            <iframe className="iframe" title="Podcast-Player" frameborder="0" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482"></iframe>
        </div>
        </Layout>
    )
}