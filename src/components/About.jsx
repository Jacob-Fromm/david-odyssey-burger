import React from 'react'
import {Link} from 'gatsby'

const linkStyles = {
  color: "black",
  textDecoration: "none",
}

export default function About(){
    return(
        <>
        <section className="about" id="about-section">
            <div className="about-title">
                <h1>ABOUT</h1>
            </div>
            <div className="about-main">
                <h3>In his work as a journalist, performer and diviner, David Odyssey charts a course through the stories of the real and the mythic.</h3>

                <h3>As a former editor at Time Out New York, and as a contributor to DAZED, Vulture, EW, The InQueery and other sites, he has covered queer, alternative and emerging artistic scenes.</h3> 
                
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
            <div className="about-title">
                <h1>READINGS</h1>
            </div>
            <div className="about-main">
                <h3>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. All readings are new-user friendly, and conducted over Zoom. Options, rates and reading packages abound; sliding scale is available. Contact adavidodyssey@gmail.com for more information.  </h3>
            <Link to="/podcast" style={linkStyles}>
              <h5 className="inner-nav">BOOK A READING {'>'} </h5>
            </Link>
            </div>
        </section>
        {/* <div class="scrollHalf">
  
  <div class="scrollHalf__grupo" data-scroll>
    <div class="scrollHalf__grupo__imagen">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106155/OrionTree_Fairbairn_1071.jpg" />
    </div>
    <div class="scrollHalf__grupo__contenido">
      <h1>Titulo 1</h1>
      
Betelgeuse
Map of the constellation Orion
Red circle.svg
Betelgeuse (circled) in the constellation Orion
Observation data
Epoch J2000.0      Equinox J2000.0
Constellation	Orion
Pronunciation	/ˈbiːtəldʒuːz, ˈbɛtəl-, -dʒuːs/[1][2]
Right ascension	05h 55m 10.30536s[3]
Declination	+07° 24′ 25.4304″[3]
Characteristics
Evolutionary stage	Red supergiant
Spectral type	M1–M2 Ia–ab[4]
Apparent magnitude (V)	0.50[5] (0.0 - 1.3[6])
Apparent magnitude (J)	−3.00[7]
Apparent magnitude (K)	−4.05[7]
U−B color index	+2.06[5]
B−V color index	+1.85[5]
Variable type	SRc[6]
Astrometry
Radial velocity (Rv)	+21.91[8] km/s
Proper motion (μ)	RA: 26.42 ± 0.25[9] mas/yr
Dec.: 9.60 ± 0.12[9] mas/yr
Parallax (π)	4.51 ± 0.80[9] mas
Distance	222+48
−34[9] pc
Absolute magnitude (MV)	−5.85[10]
Details
Mass	11.6+5.0
−3.9[11] M☉
Radius	887 ± 203[12], 955±217[11] R☉
Luminosity	90000 – 150000[13] L☉
Surface gravity (log g)	−0.5[14] cgs
Temperature	3590[11] K
Metallicity [Fe/H]	+0.05[15] dex
Rotational velocity (v sin i)	5[16] km/s
Age	8.0 – 8.5[12] Myr
Other designations
Betelgeuse, α Ori, 58 Ori, HR 2061, BD+7°1055, HD 39801, FK5 224, HIP 27989, SAO 113271, GC 7451, CCDM J05552+0724AP, AAVSO 0549+07
Database references
SIMBAD	data
Coordinates: Sky map 05h 55m 10.3053s, +07° 24′ 25.426″

    </div>
  </div>
  
  <div class="scrollHalf__grupo kk" data-scroll>
    <div class="scrollHalf__grupo__imagen">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106155/1920px-Betelgeuse_captured_by_ALMA.jpg" />
      <!-- 
        De ALMA, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=60432670 
      -->
    </div>
    <div class="scrollHalf__grupo__contenido">
      <h1>Titulo 2</h1>
This orange blob shows the nearby star Betelgeuse, as seen by the Atacama Large Millimeter/submillimeter Array (ALMA). This is the first time that ALMA has ever observed the surface of a star and this first attempt has resulted in the highest-resolution image of Betelgeuse available.
Betelgeuse, also designated Alpha Orionis (α Orionis, abbreviated Alpha Ori, α Ori), is on average the ninth-brightest star in the night sky and second-brightest in the constellation of Orion. It is distinctly reddish, and is a semiregular variable star whose apparent magnitude varies between 0.0 and 1.3, the widest range of any first-magnitude star. Betelgeuse is one of three stars that make up the Winter Triangle asterism, and it marks the center of the Winter Hexagon. It would be the brightest star in the night sky if the human eye could view all wavelengths of radiation. fghfghfh fg hgfd
    </div>
  </div>
  
  <div class="scrollHalf__grupo" data-scroll>
    <div class="scrollHalf__grupo__imagen">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106155/potw1726b.jpg" />
    </div>
    <div class="scrollHalf__grupo__contenido">
      <h1>Titulo 3</h1>
Classified as a red supergiant of spectral type M1-2, the star is one of the largest stars visible to the naked eye. If Betelgeuse were at the center of the Solar System, its surface would extend past the asteroid belt, completely engulfing the orbits of Mercury, Venus, Earth, Mars, and possibly Jupiter. However, there are several other red supergiants in the Milky Way that could be larger, such as Mu Cephei, VV Cephei A, and VY Canis Majoris. Calculations of its mass range from slightly under ten to a little over twenty times that of the Sun. It is calculated to be 640 light-years away, yielding an absolute magnitude of about −6. Less than 10 million years old, Betelgeuse has evolved rapidly because of its high mass. Having been ejected from its birthplace in the Orion OB1 Association—which includes the stars in Orion's Belt—this runaway star has been observed moving through the interstellar medium at a speed of 30 km/s, creating a bow shock over four light-years wide. Currently in a late stage of stellar evolution, the supergiant is expected to explode as a supernova within the next million years.

In 1920, Betelgeuse became the first extrasolar star to have the angular size of its photosphere measured. Subsequent studies have reported an angular diameter (apparent size) ranging from 0.042 to 0.056 arcseconds, with the differences ascribed to the non-sphericity, limb darkening, pulsations, and varying appearance at different wavelengths. It is also surrounded by a complex, asymmetric envelope roughly 250 times the size of the star, caused by mass loss from the star itself. The angular diameter of Betelgeuse is only exceeded by R Doradus (and the Sun).
    </div>
  </div> 
  
</div> */}
</>
    )
}