import React from 'react'
import {InlineWidget, PopupButton, PopupText, PopupWidget} from 'react-calendly'
import {useStaticQuery, graphql } from 'gatsby'

export const query = graphql`
    query ReadingQuery {
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
export default function CalendlyPopup(props) {
    const data = props
    console.log("readings data: ", data)
    return (
        <div className='calendly-container'>
            <h2>Tarot</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Tarot reading, $90</strong></h4>
                    <p><em>Zoom Tarot reading, covering two questions or arenas of interest</em></p>
                </div>
                    <PopupText
                        //  styles={{
                        //     'width': '20vw'
                        // }} 
                            text="Click to Purchase"
                            url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28750967"
                    />
            </div>
                     <h2>Astrology</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart reading, $200</strong></h4>
                    <p><em>Zoom chart reading covering the elements of your essential astrology</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '20vw'
                        // }}  
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28751025"
                        />
            </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology transits reading, $200</strong></h4>
                    <p><em>Zoom reading covering upcoming dates and major astrological “events,” based on your chart</em></p>
                </div>
                    <PopupText
                        //  styles={{
                        //     'width': '20vw'
                        // }} 
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28751039"
                        />
            </div>
            <h2>Packages</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart + transits readings, $340</strong></h4>
                    <p><em>Two readings, covering essential chart elements and upcoming astrological “events”</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '20vw'
                        // }} 
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28751066"
                        />
            </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart + Tarot readings, $245</strong></h4>
                    <p><em>Two readings, including essential chart breakdown and two Tarot spreads</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '20vw'
                        // }} 
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28751078"
                        />
                </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology Gift Reading, $200</strong></h4>
                    <p><em>A gift of a one-hour Zoom chart reading, shared as a certificate with the recipient.</em></p>
                </div>
                    <PopupText
                        //  styles={{
                        //     'width': '20vw'
                        // }} 
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/catalog.php?owner=24330143&action=addCart&clear=1&id=1189531"
                        />
            </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Tarot Gift Reading, $90</strong></h4>
                    <p><em>A gift of a one-hour Zoom tarot reading, shared as a certificate with the recipient.</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '20vw'
                        // }} 
                        text="Click to Purchase"
                        url="https://app.squarespacescheduling.com/catalog.php?owner=24330143&action=addCart&clear=1&id=1189534"
                        />
            </div>
        </div>
    )
}