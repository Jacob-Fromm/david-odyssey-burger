import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import AstrologyImage from '../images/DAVID_ASTROLOGY.jpg'
import TestimonialCarousel from '../components/TestimonialCarousel'
<<<<<<< HEAD
import CalendlyPopup from '../components/CalendlyPopup'
=======
import { InlineWidget } from "react-calendly";
import CalendlyPopup from '../components/CalendlyPopup'
import { graphql } from 'gatsby'
import SquarespaceCal from '../components/SquarespaceCal'
import EventCalendar from '../components/Event/EventCalendar.jsx'
>>>>>>> 546edecec2f162cc1b9c4bc2d9610825bd11014f

export const query = graphql`
    query TestimonialQuery {
        testimonials: allSanityTestimonial {
            edges {
            node {
                quote
                name
            }
        }
    }
}
`


export default function Readings(props){
    const {data} = props
    console.log("testimonial data", data)
    return(
        <Layout>
<<<<<<< HEAD
            <div className="bio-container" id="readings-container">
=======
            <div className="bio-container">
>>>>>>> 546edecec2f162cc1b9c4bc2d9610825bd11014f
            <div className="bio-image">
            <StaticImage 
                id="readings-image-main"
                src='../images/DAVID_ASTROLOGY.jpg'
                alt="Photo Illustration of David Odyssey by Greg Kozatek"
<<<<<<< HEAD
                width={600}
                height={643.5}
=======
                width={1200}
                height={1287.5} 
>>>>>>> 546edecec2f162cc1b9c4bc2d9610825bd11014f
                // layout="contain"
                placeholder="blurred"
            />
            <h6><a href="http://www.gregkozatek.com">Photo Illustration by Greg Kozatek</a></h6>
<<<<<<< HEAD



            </div>
                <div id="readings-text" className="bio-text">
                    <h2 id="readings-title">READINGS</h2>
                    <p>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. Astrology readings offer a zoomed-out guide to the symbols and meanings of your birth chart, leading up to the planetary movements of the current moment. The Tarot invokes archetypal imagery to spark dialogue and insight on any immediate questions, no matter how broad or specific.</p>
                
                    <p>All readings are new-user friendly, and conducted over Zoom, usually lasting up to an hour. Bookings are available below. For questions, sliding scale rates or to buy a gift reading, contact <a href="mailto: adavidodyssey@gmail.com">adavidodyssey@gmail.com</a> to book a reading.</p>
                    <CalendlyPopup />
                    <div className="testimonials">
                        <h3>Testimonials</h3>
                        <TestimonialCarousel/>
                    </div>
                </div> 
            </div>
        </Layout>
    //    <Layout >
    //     <div className="readings">
    //        <h1 className="about-title">READINGS</h1>
    //        <div className="readings-main">
    //        <div className="readings-image-and-description">
    //             {/* <StaticImage src='../images/DAVID_ASTROLOGY.jpg' alt="photo of David Odsyssey holding a crystal ball" /> */}
    //             <h3 id="readings-info">David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. All readings are new-user friendly, and conducted over Zoom. Options, rates and reading packages abound; sliding scale is available.<br></br>Contact <a href="mailto: adavidodyssey@gmail.com">adavidodyssey@gmail.com</a> to book a reading.</h3>
    //         </div>
    //     </div>
    //     </div>
    //    </Layout>
=======
            {/* <InlineWidget url="https://calendly.com/adavidodyssey" /> */}
              {/* <SquarespaceCal /> */}
              <EventCalendar />
            </div>
                <div id="readings-text" className="bio-text">
                    <h2 style={{width: '50vw'}}id="readings-title">READINGS</h2>
                    <p>David Odyssey offers archetypal, intuitive readings through astrology and the Tarot. Astrology readings offer a zoomed-out guide to the symbols and meanings of your birth chart, leading up to the planetary movements of the current moment. The Tarot invokes archetypal imagery to spark dialogue and insight on any immediate questions, no matter how broad or specific.</p>

                    <p>All readings are new-user friendly, and conducted over Zoom, usually lasting up to an hour. You can book a reading below. For questions, sliding scale rates or to buy a gift reading, contact <a href="mailto: adavidodyssey@gmail.com">adavidodyssey@gmail.com</a></p>
                    <CalendlyPopup />
                    <div className="testimonials">
                        <h3>Testimonials</h3>
                        <TestimonialCarousel testimonials={data.testimonials.edges}/>
                    </div>
                </div>
            </div>
        </Layout>
>>>>>>> 546edecec2f162cc1b9c4bc2d9610825bd11014f
    )
}