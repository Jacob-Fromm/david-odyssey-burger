import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';

const IndexPage = () => {
  return(
  <ThemeProvider theme={theme}>
   <GlobalStyles>
     <div>
      <h1>David Odyssey</h1>
      <p>enter the angel dimension</p>
      <StaticImage
        src="../images/DAVID_SPLASH_PAGE_2.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="photo of David Odyssey"
        style={{ marginBottom: `1.45rem` }}
      />
     </div>
    {/* <SEO title="Home" /> */}
    </GlobalStyles>
  </ThemeProvider>
  )
  }

export default IndexPage
