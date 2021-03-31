import React from 'react'
import { graphql } from 'gatsby'
import {
    mapEdgesToNodes,
    filterOutDocsWithoutSlugs,
    filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import { Link } from 'react-scroll'
import ArticlePreviewGrid from '../components/Article/article-preview-grid'
import Layout from '../components/layout'

export const query = graphql`
  query ArticlePageQuery {
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
export default function Articles(props) {
    const { data, errors } = props
    console.log("article page data ", data)
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