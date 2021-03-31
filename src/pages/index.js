import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"



const IndexPage = () => {
  return(
    <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
    </Layout>
    )
  }

export default IndexPage
