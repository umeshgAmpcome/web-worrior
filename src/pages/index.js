import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as Styles from "../styles/home.module.css"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.fluid)

  console.log(data)
  // const { title, description } = data.site.siteMetadata
  // console.log(title, description)
  // const styles = useStyles()
  return (
    <Layout>
      <section className={Styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer web deveoper based on manchester</p>
          <Link className={Styles.btn} to="/projects">
            My portfolio
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//         # copyright
//       }
//     }
//   }
// `
