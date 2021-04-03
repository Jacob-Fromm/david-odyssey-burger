import React from 'react'
import {Link} from 'gatsby'
import ArticlePreviewGrid from './Article/article-preview-grid'
import ArticleCarousel from './ArticleCarousel'

const linkStyles = {
  color: "black",
  textDecoration: "none",
}

export default function About(props){
  console.log("about page props ", props.articles)

    return(
        <>
        <section className="about" id="about-section">
            <div className="about-title">
            <Link className="about-title" to="/articles" style={{ textDecoration: 'none' }}>
              <h1>ABOUT</h1>
            </Link>
            </div>
            <div className="about-main">
                <h3>You have entered the digital domain of the writer, editor, performer, diviner and cosmic being David Odyssey.</h3>
                
                <h3>In his work as a journalist, performer and diviner, David charts a course through the stories of the real and the mythic. He has edited for and contributed to Time Out New York, DAZED, Vulture, EW, The InQueery and other sites</h3>
                
                <h3>On his podcast The Luminaries and at live salons and cabaret shows, he explores the origin stories and cosmic makeup of his guests (and uncovers his own epic saga).</h3>

                <h3>Through Tarot and astrology, he offers an archetypal framework for the current moment. He lives, eternally, in New York City. </h3>
            <Link to="/bio" style={linkStyles}>
              <h5 id="long-nav" className="inner-nav">LEARN MORE{'>'} </h5>
            </Link>
            </div>
        </section>
        <section className="about" id="about-writing">
          <div id="writing-container" className="about-section-container">
            <div className="title-and-description-container">
              <div className="about-title">
                <Link className="about-title" to="/articles" style={{ textDecoration: 'none' }}>
                  <h1>WRITING</h1>
                </Link>
              </div>
              <div className="about-main">
                <h3>Since 2008, David Odyssey has written about nightlife, music, comedy, drag, cabaret and TV, primarily in New York City. As an editor at Time Out New York (2015–2019), and as a contributor to DAZED, Vulture, EW, The InQueery and other sites, he has brought attention to queer, alternative and emerging artistic scenes—from drag artists at Bushwig to skateboarders at Tompkins Square Park. Sandra Bernhard, Justin Vivian Bond, Laverne Cox and Charlene are among his favorite interview subjects. </h3>
                <Link to="/articles" style={linkStyles}>
                  <h5 id="long-nav" className="inner-nav">EXPLORE DAVID'S WRITING{'>'} </h5>
                </Link>
              </div>
              </div>
              <ArticleCarousel articles={props.articles} />
          </div>
        </section>
        <section className="about" id="about-podcast">
          <div id="podcast-container" className="about-section-container">
            <div className="title-and-description-container">
              <div className="about-title">
                <Link className="about-title" to="/podcast" style={{textDecoration: 'none'}}>
                  <h1>PODCAST<h2><a href="https://podcasts.apple.com/us/podcast/the-luminaries-with-david-odyssey/id1464759824"
                  text-decoration="none"
                  >subscribe here</a></h2></h1>
              </Link>
              </div>
              <div className="about-main">
                <h3>The Luminaries with David Odyssey features the new gods of the comedy, drag, cabaret and literary scenes, sharing their life stories and celebrating the astrology of their greatest influences. New episodes available weekly on Apple Podcasts, Spotify, and wherever podcasts are sold.</h3>
                  <Link to="/podcast" style={linkStyles}>
                    
                <h5 className="inner-nav">LISTEN HERE{'>'} </h5>
                  </Link>
              </div>
            </div>
            <iframe className="iframe" title="Podcast-Player" frameborder='0' src="https://playlist.megaphone.fm?p=ADL3471774599"></iframe>
          </div>
        </section>
        <section className="about" id="about-readings">
          <Link className="about-title" to="/readings" style={{ textDecoration: 'none' }}>
            <h1>READINGS</h1>
          </Link>
            <div className="about-main">
            <h3>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot.</h3>
            
            <Link to="/readings" style={linkStyles}>
              <h5 className="inner-nav">LEARN MORE AND BOOK A READING{'>'} </h5>
            </Link>
  
            </div>
        </section>
        
</>
    )
}