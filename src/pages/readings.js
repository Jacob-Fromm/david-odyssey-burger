import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import AstrologyImage from "../images/DAVID_ASTROLOGY.jpg"
import TestimonialCarousel from "../components/TestimonialCarousel"
import { InlineWidget } from "react-calendly"
import CalendlyPopup from "../components/CalendlyPopup"
import { graphql } from "gatsby"
import SquarespaceCal from "../components/SquarespaceCal"
import EventCalendar from "../components/Event/EventCalendar.jsx"

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
    readings: allSanityReading {
      edges {
        node {
          id
          title
          category
          price
          description
          url
        }
      }
    }
  }
`

export default function Readings(props) {
  const { data } = props

  return (
    <Layout>
      <div className="bio-container">
        <div className="bio-image">
          <StaticImage
            id="readings-image-main"
            src="../images/DAVID_ASTROLOGY.jpg"
            alt="Photo Illustration of David Odyssey by Greg Kozatek"
            width={1200}
            height={1287.5}
            // layout="contain"
            placeholder="blurred"
          />
          <h6>
            <a href="http://www.gregkozatek.com">
              Photo Illustration by Greg Kozatek
            </a>
          </h6>
          {/* <InlineWidget url="https://calendly.com/adavidodyssey" /> */}
          {/* <SquarespaceCal /> */}
          <EventCalendar />
        </div>
        <div id="readings-text" className="bio-text">
          <h2 id="readings-title">READINGS</h2>
          <p>
            David Odyssey offers archetypal, intuitive readings through
            astrology and the Tarot. Astrology readings offer a zoomed-out guide
            to the symbols and meanings of your birth chart, leading up to the
            planetary movements of the current moment. The Tarot invokes
            archetypal imagery to spark dialogue and insight on any immediate
            questions, no matter how broad or specific.
          </p>

          <p>
            All readings are new-user friendly, and conducted over Zoom, usually
            lasting up to an hour. You can book a reading below. For questions,
            sliding scale rates or to buy a gift reading, contact{" "}
            <a href="mailto: adavidodyssey@gmail.com">
              adavidodyssey@gmail.com
            </a>
          </p>
          <CalendlyPopup readings={data.readings.edges} />
          <div className="testimonials">
            <h3>Testimonials</h3>
            <TestimonialCarousel testimonials={data.testimonials.edges} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
