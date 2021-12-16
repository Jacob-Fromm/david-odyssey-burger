import React from 'react'
import { Link } from "gatsby"
import { urlFor } from '../../lib/image-url'
import moment from 'moment'

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
                        <h4 ><strong>{props.name}</strong> | {moment(props.eventDate).format('MMMM Do, YYYY')} at {moment(props.eventDate).format('h:mm a')}</h4>
                    </div>
                    <div className="event-description">
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}