import React from 'react'

export default function SquarespaceCal() {
    const style = {
        backgroundColor: "red",
        color:"#fff",
        padding: "8px 12px", 
        border: '0px', 
        boxShadow: '0 -2px 0 rgba(0,0,0,0.15)', 
        boxShadow: '0 -2px 0 rgba(0,0,0,0.15)', 
        boxShadow: '0 -2px 0 rgba(0,0,0,0.15)',
        borderRadius: '4px', 
        textDecoration: 'none', 
        display: 'inline-block'
    }
    return(
        <>
        <h1>
            Squarespace content goes here
        </h1>
            <a href="https://app.squarespacescheduling.com/schedule.php?owner=24330143&appointmentType=27335060" target="_blank" className="acuity-embed-button" 
            style={{style}}>Schedule Appointment</a>
                <link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/24330143.css" id="acuity-button-styles" />
                    <script src="https://embed.acuityscheduling.com/embed/button/24330143.js" async></script>
        </>
    )
}