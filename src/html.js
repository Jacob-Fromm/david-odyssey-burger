import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <meta property="twitter:image" content="https://davidodyssey.com/static/DAVID_SPLASH_PAGE_2-b5a4d9efca674b257511929c2bcd3967.jpg"></meta> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@davidodyssey" />
        <meta name="twitter:creator" content="@davidodyssey" />
        <meta property="og:url" content="http://davidodyssey.com/" />
        <meta property="og:title" content="David Odyssey" />
        <meta property="og:description" content="enter the angel dimension" />
        {/* <meta property="og:image" content="https://davidodyssey.com/static/DAVID_SPLASH_PAGE_2-b5a4d9efca674b257511929c2bcd3967.jpg" /> */}
        
        {/* <script src="https://kit.fontawesome.com/96cf8fbf46.js" crossorigin="anonymous"></script> */}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
