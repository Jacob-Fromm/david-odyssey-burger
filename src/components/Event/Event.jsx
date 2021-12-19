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
                            {props.eventDate.length > 1 
                            ?
                            <>
                            <div className="multiple-dates">
                                <p>{moment(props.eventDate[0]).format('MMMM Do, YYYY')} <br></br>{moment(props.eventDate[0]).format('h:mm a')} | <a href={props.url}>Register Here</a></p>
                            
                            <p id="future-dates">Course dates: {props.eventDate.map(function(date){
                                return moment(date).format("MM/DD")
                            }).join(', ')}</p>
                            </div>
                            </>
                            :  
                            <p>{moment(props.eventDate[0]).format('MMMM Do, YYYY')} <br></br>{moment(props.eventDate[0]).format('h:mm a')} | <a href={props.url}>Register Here</a></p>}
                            
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