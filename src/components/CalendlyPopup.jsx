import React from 'react'
import {InlineWidget, PopupButton, PopupText, PopupWidget} from 'react-calendly'

export default function CalendlyPopup() {
    return (
        <div className='calendly-container'>
            <h2>Tarot</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Tarot reading, $75</strong></h4>
                    <p><em>Zoom Tarot reading, covering two questions or arenas of interest</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                            text="Click to Book"
                            url="https://calendly.com/adavidodyssey/tarot-reading"
                    />
            </div>
           <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Group Tarot reading, $150</strong></h4>
                    <p><em>Zoom Tarot reading for three–five people, ideal for special events or group gatherings</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                        text="Click to Book"
                        url="https://calendly.com/adavidodyssey/group-tarot-reading"
                        />
            </div>
                     <h2>Astrology</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart reading, $175</strong></h4>
                    <p><em>Zoom chart reading covering the elements of your essential astrology</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                        text="Click to Book"
                        url="https://calendly.com/adavidodyssey/astrology-chart-reading"
                        />
            </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology transits reading, $175</strong></h4>
                    <p><em>Zoom reading covering upcoming dates and major astrological “events,” based on your chart</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                        text="Click to Book"
                        url="https://calendly.com/adavidodyssey/astrology-transits-reading"
                        />
            </div>
            <h2>Packages</h2>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart + transits readings, $275</strong></h4>
                    <p><em>Two readings, covering essential chart elements and upcoming astrological “events”</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                        text="Click to Book"
                        url="https://calendly.com/adavidodyssey/astrology-natal-and-transits"
                        />
            </div>
            <div className='calendly-btn-and-text'>
                <div className='calendly-title-and-text'>
                    <h4><strong>Astrology chart + Tarot readings, $220</strong></h4>
                    <p><em>Two readings, including essential chart breakdown and two Tarot spreads</em></p>
                </div>
                    <PopupText
                        // styles={{
                        //     'width': '25vw'
                        // }} 
                        text="Click to Book"
                        url="https://calendly.com/adavidodyssey/astrology-tarot-combo-package"
                        />
            </div>
        </div>
        
    )
}