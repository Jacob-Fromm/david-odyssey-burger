/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO = ({ title, description, image, article}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    // twitterUsername,
  } = site.siteMetadata

   const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  console.log("seo image", seo.image)
  return(
   <Helmet title={seo.title}
     meta={[
        {
          name: 'description',
          content: seo.description || site.siteMetadata.defaultDescription
        },
        {
          name: 'image',
          content: seo.image || site.siteMetadata.defaultImage
        },
        {
          name: 'url',
          content: seo.url
        },
        {
          property: 'og:title',
          content: seo.title
        },
        {
          property: 'og:description',
          content: seo.description
        },
        {
          property: 'og:image',
          content: seo.image || site.siteMetadata.defaultImage
        },
        {
          name: 'twitter:image',
          content: seo.image || site.siteMetadata.defaultImage
        }

     ]}
      // {/* <meta name="description" content={seo.description} />
      // <meta name="image" content={seo.image} />
      // {seo.url && <meta property="og:url" content={seo.url} />}
      // {(article ? true : null) && <meta property="og:type" content="article" />}
      // {seo.title && <meta property="og:title" content={seo.title} />}
      // {seo.description && (
      //   <meta property="og:description" content={seo.description} />
      // )}
      // {seo.image && <meta property="og:image" content={seo.image} />}
      // {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        # twitterUsername
      }
    }
  }
`

//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title


// export default SEO
