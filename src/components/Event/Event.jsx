import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export default function Event() {
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
    
    return(
        <>
            {console.log("event data", data)}
        </>
    )
}