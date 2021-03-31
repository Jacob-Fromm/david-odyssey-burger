import React from 'react'
import Layout from '../components/layout'

export default function Podcast() {
    return (
        <Layout >
        <div>
            <h1>The Luminaries Podcast</h1>
            <h2>Subscribe Here</h2>
            <iframe title="Podcast-Player" frameborder="0" src="https://playlist.megaphone.fm?p=ADL3471774599" width="100%" height="482"></iframe>
        </div>
        </Layout>
    )
}