import {useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Event from './Event'


function EventCalendar(props) {
  const data = useStaticQuery(graphql`
        query EventQuery {
            events: allSanityEvent(sort: {fields: eventDate, order: DESC}) {
    edges {
      node {
        id
        name
        url
        eventDate
        duration
        price
        description
        image {
          _key
          _type
          
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            height
            width
            x
            y
          }
          asset {
            assetId
            fluid {
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              base64
              aspectRatio
            }
            id
            _id
          }
        }
      }
    }
  }
        }
    `)

    const events = data.events.edges
    return (
        <>
        {console.log("events data", events)}
            <h1>Events Here</h1>
        <div className="event-root">
            <div className="bio-text">
                <h2>Upcoming Events</h2>
            </div>
            <ul className="calendar-list">
                {data &&
                    events.map(event => (
                        <li key={event.id}>
                            <Event {...event.node} />
                        </li>
                    ))}
            </ul>
    </div>
    </>
    )
}

// ArticlePreviewGrid.defaultProps = {
//     headline: '',
//     nodes: [],
//     browseMoreHref: ''
// }

export default EventCalendar
