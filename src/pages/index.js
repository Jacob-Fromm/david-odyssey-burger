import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import {graphql} from 'gatsby'
import splashImage from '../images/DAVID_SPLASH_PAGE_2.jpg'

export const query = graphql`
  query IndexPageQuery {
    articles: allSanityArticle(sort: {fields: publicationDate, order: DESC}) {
    edges {
      node {
        id
        headline
        slug {
          current
        }
        url
        publication {
          name
          url
        }
        publicationDate
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
  return(
    <Layout data={data}>
        <SEO title="David Odyssey"/>
        <Hero />
        <About articles={data.articles.edges}/>
    </Layout>
    )
  }

export default IndexPage
