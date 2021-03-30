import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => {
  return(
    <Layout>
        <SEO title="Home" />
        <Hero />
      </Layout>
   
  )
  }

export default IndexPage
