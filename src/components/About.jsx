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
        <section className="about" id="about-writing">
          <div id="writing-container" className="about-section-container">
            <div className="title-and-description-container">
              <div className="about-title">
                <Link className="about-title" to="/articles" style={{ textDecoration: 'none' }}>
                  <h1>WRITING</h1>
                </Link>
              </div>
              <div className="about-main">
                <h3>As a former editor at Time Out New York, and as a contributor to DAZED, Vulture, EW, The InQueery and other sites, he has covered queer, alternative and emerging artistic scenes.</h3>
                <Link to="/articles" style={linkStyles}>
                  <h5 id="long-nav" className="inner-nav">EXPLORE DAVID'S WRITING{'>'} </h5>
                </Link>
              </div>
              </div>
              <ArticleCarousel articles={props.articles} />
          </div>
        </section>
        <section className="about" id="about-section">
            <div className="about-title">
            <Link className="about-title" to="/articles" style={{ textDecoration: 'none' }}>
              <h1>ABOUT</h1>
            </Link>
            </div>
            <div className="about-main">
                <h3>In his work as a journalist, performer and diviner, David Odyssey charts a course through the stories of the real and the mythic.</h3>
                
                <h3>On his podcast The Luminaries and at live salons and cabaret shows, he explores the origin stories and cosmic makeup of his guests (and uncovers his own epic saga). Through Tarot and astrology, he offers an archetypal framework for the current moment. He lives, eternally, in New York City. </h3>
            <Link to="/articles" style={linkStyles}>
              <h5 id="long-nav" className="inner-nav">EXPLORE DAVID'S WRITING{'>'} </h5>
            </Link>
            </div>
        </section>
        <section className="about" id="about-podcast">
            <div className="about-title">
              <Link className="about-title" to="/podcast" style={{textDecoration: 'none'}}>
                <h1>PODCAST</h1>
            </Link>
            </div>
            <div className="about-main">
                <h3>The Luminaries with David Odyssey features the new gods of the comedy, drag, cabaret and literary scenes, sharing their life stories and celebrating the astrology of their greatest influences. Available on Apple Podcasts, Spotify, and wherever podcasts are sold. </h3>
                <Link to="/podcast" style={linkStyles}>
              <h5 className="inner-nav">LEARN MORE{'>'} </h5>
                </Link>
            </div>
        </section>
        <section className="about" id="about-readings">
          <Link className="about-title" to="/readings" style={{ textDecoration: 'none' }}>
            <h1>READINGS</h1>
          </Link>
            <div className="about-main">
            <h3>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. All readings are new-user friendly, and conducted over Zoom. Options, rates and reading packages abound; sliding scale is available. Contact <a href="mailto: adavidodyssey.com">adavidodyssey@gmail.com</a> for more information.  </h3>
            
            <Link to="/readings" style={linkStyles}>
              <h5 className="inner-nav">BOOK A READING {'>'} </h5>
            </Link>
  
            </div>
        </section>
        
</>
    )
}