import React from 'react'
import { Link } from "gatsby"
import { urlFor } from '../../lib/image-url'

export default function Event(props) {
  
      const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    }
    return(
        <>
           {console.log("Event component props", props)} 
            <Link style={linkStyles} to={props.url}>
                <img
                    src={urlFor(props.image)
                        .width(100)
                        .url()}
                    alt={props.name}
                />
                <p >{props.name} | {props.eventDate}</p>
                <div className="event-description">
                    {/* <p>{props.description}</p> */}
                </div>
        </Link>
        </>
    )
}