import React from 'react'
import { Link } from 'react-scroll'
import ArticlePreviewGrid from '../components/Article/article-preview-grid'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import NavMenu from '../components/NavMenu'

export const query = graphql`
  query ArticlePageQuery {
    articles: allSanityArticle(sort: {fields: publicationDate, order: DESC}) {
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

export default function Articles(props) {
    const {data} = props
    console.log("articles page props", data)
    return (
    <>
    <Layout>
        <ArticlePreviewGrid
        title='Latest Articles'
        articles={data.articles.edges}
        browseMoreHref='/archive/'
          />
    </Layout>
    </>
    )
}