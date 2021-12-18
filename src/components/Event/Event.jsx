import React from 'react'
import { Link } from "gatsby"
import { urlFor } from '../../lib/image-url'
import moment from 'moment'
// import PopupText from 'react-calendly'

export default function Event(props) {
  
      const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    }
    return(
        <>
           {console.log("Event component props", props)} 
            <Link style={linkStyles} to={props.url}>
                <div className="event-container">
                    <div className="event-details">
                        <img
                            src={urlFor(props.image)
                                .width(100)
                                .url()}
                            alt={props.name}
                        />
                        <div className="event-name-and-date">
                            <h4 ><strong>{props.name}</strong></h4>
                            <p>{moment(props.eventDate).format('MMMM Do, YYYY')} <br></br>{moment(props.eventDate).format('h:mm a')} | <a href="https://app.squarespacescheduling.com/catalog.php?owner=24330143&action=addCart&clear=1&id=1189534">Register Here</a></p>
                        </div>
                    </div>
                    <div className="event-description">
                        <p><em>{props.description}</em></p>
                    </div>
                </div>
            </Link>
        </>
    )
}