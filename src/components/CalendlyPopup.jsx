import React from 'react'
import {InlineWidget, PopupButton, PopupText, PopupWidget} from 'react-calendly'
import {useStaticQuery, graphql } from 'gatsby'

export default function CalendlyPopup(props) {
    const data = props.readings
    const tarotData = []
    const astrologyData = []
    const comboData = []
    const separateData = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            console.log("data from function: ", arr[i])
            if (arr[i].node.category === "Tarot") {
                tarotData.push(arr[i])
            } else if (arr[i].node.category === "Astrology") {
                astrologyData.push(arr[i])
            } else if (arr[i].node.category === "Combo Packages") {
                comboData.push(arr[i])
            }
        }
    }
    const takeTarot = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            makeTarot(arr[i].node)
        }
    }
    
    const makeTarot = (reading) => {
        return (
            <h1>makeTarot</h1>
            // <div className='calendly-btn-and-text'>
            //     {console.log("makeTarot function: ", reading)}
            //     <div className='calendly-title-and-text'>
            //         <h4><strong>{reading.title}, {reading.price}</strong></h4>
            //         <p><em>{reading.description}</em></p>
            //     </div>
            //         <PopupText
            //             text="Click to Purchase"
            //             url={reading.url}
            //         />
            // </div>
        )
    }


    const testFunction = () => {
        return <h1>hello</h1>
    }
    separateData(data)
    console.log("readings page data: ", data)
    // console.log("separateData function: ", separateData(data))
    console.log("taro data: ", tarotData)
    console.log("astrology data: ", astrologyData)
    console.log("combodata: ", comboData)
    return (
        <div className='calendly-container'>
            <div className="category-tarot">      
            <h2>Tarot</h2>
            {tarotData.length > 0 ?
            <>
                {testFunction()}
                {takeTarot(tarotData)}
                </>
                    // {console.log("tarotItem: ", tarotItem.node)}
                        // <div className='calendly-btn-and-text'>
                        //     <div className='calendly-title-and-text'>
                        //         <h4><strong>{tarotItem.node.title}, {tarotItem.node.price}</strong></h4>
                        //         <p><em>Zoom Tarot reading, covering two questions or arenas of interest</em></p>
                        //     </div>
                        //         <PopupText
                        //             text="Click to Purchase"
                        //             url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28750967"
                        //         />
                        // </div>
                    : 
                    <>
                    </>
                }
            </div>
            <div className="category-astrology">
                <h2>Astrology</h2>
                {astrologyData.length > 0 ? 
                    astrologyData.map((astrologyItem) => {
                        {console.log("astrologyItem: ", astrologyItem)}
                            <div className='calendly-btn-and-text'>
                                <div className='calendly-title-and-text'>
                                    <h4><strong>{astrologyItem.node.title}, {astrologyItem.node.price}</strong></h4>
                                    <p><em>Zoom Tarot reading, covering two questions or arenas of interest</em></p>
                                </div>
                                    <PopupText
                                        text="Click to Purchase"
                                        url="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=28750967"
                                    />
                            </div>
                    })
                : 
                    <>
                    </>
                }
                <div className='calendly-btn-and-text'>
                    <div className='calendly-title-and-text'>
                        <h4><strong>Astrology chart reading, $200</strong></h4>
                        <p><em>Zoom chart reading covering the elements of your essential astrology</em></p>
                    </div>
                        <PopupText
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
            </div>
            <div className="category-combo">
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
        </div>
    )
}