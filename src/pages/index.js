import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import {Link} from 'react-scroll'

export const query = graphql`
  query IndexPageQuery {
    articles: allSanityArticle {
    edges {
      node {
        id
        headline
        slug {
          current
        }
        url
        publication
        publicationDate(formatString: "")
        author {
          name
        }
        image {
          _key
          _type
          alt
          caption
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
`

const IndexPage = (props) => {
  const { data, errors } = props
  console.log("index page data ", data)
  return(
    <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
    </Layout>
    )
  }

export default IndexPage
