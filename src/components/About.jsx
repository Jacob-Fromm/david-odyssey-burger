import React from 'react'
import {Link} from 'gatsby'
import ArticlePreviewGrid from './Article/article-preview-grid'
import ArticleCarousel from './TestimonialCarousel'

const linkStyles = {
  color: "black",
  textDecoration: "none",
}

export default function About(props){
  console.log("about page props ", props.articles)

    return(
        <>
        <section className="about" >
            <div className="about-title">
            <Link className="about-title" to="/bio" style={{ textDecoration: 'none' }}>
              <h1>ABOUT</h1>
            </Link>
            </div>
            <div className="about-main">
                <h3>You have entered the digital domain of the writer, editor, performer, diviner and cosmic being David Odyssey. Through here, you can read his published work, book an astrology/tarot reading, and listen to new podcast episodes.</h3>
            <Link to="/bio" style={linkStyles}>
              <h3 id="long-nav" className="inner-nav">READ THE ORIGIN STORY{'>'} </h3>
            </Link>
            </div>
        </section>
        <section className="about">
              <div className="about-title">
                <Link className="about-title" to="/articles" style={{ textDecoration: 'none' }}>
                  <h1>WRITING</h1>
                </Link>
              </div>
              <div className="about-main">
                <h3>Since 2008, David has covered culture, queer life and astrology, for publications including <em>Time Out New York</em>, <em>DAZED</em>, <em>Vulture and EW</em>. He has an ongoing <em>NYLON</em> column and a <a href="https://davidodyssey.substack.com/" target="_blank">substack of personal writing</a>.</h3>
                <Link to="/articles" style={linkStyles}>
                  <h3 id="long-nav" className="inner-nav">EXPLORE DAVID'S WRITING{'>'} </h3>
                </Link>
              {/* <ArticleCarousel articles={props.articles} /> */}
          </div>
        </section>
        <section className="about" id="about-podcast">
      
              <div className="about-title">
                <Link className="about-title" to="/podcast" style={{textDecoration: 'none'}}>
                  <h1>PODCAST</h1>
              </Link>
              </div>
              <div className="about-main">
                <h3><em>The Luminaries with David Odyssey</em> features the new gods of the comedy, drag, cabaret and literary scenes, sharing their life stories and celebrating the astrology of their greatest influences. New episodes available weekly on <a href="https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824">Apple Podcasts</a>, <a href="https://open.spotify.com/show/4fNGhRkv7OrZnXgLI3BYwm?si=FWgSGviuSnCzk5Vu7Pp5sg&nd=1">Spotify</a>, and wherever podcasts are sold.</h3>
                  <Link to="/podcast" style={linkStyles}>
                    
                <h3 className="inner-nav">LISTEN TO ALL EPISODES HERE{'>'} </h3>
                  </Link>
          </div>
        </section>
        <section className="about" id="about-readings">
          <Link className="about-title" to="/readings" style={{ textDecoration: 'none' }}>
            <h1>READINGS</h1>
          </Link>
            <div className="about-main">
            <h3>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot.</h3>
            <Link to="/readings" style={linkStyles}>
              <h3 className="inner-nav">LEARN MORE AND BOOK A READING{'>'} </h3>
            </Link>
            </div>
        </section>
</>
    )
}