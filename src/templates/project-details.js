import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styles from "../styles/project-detail.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h2>stack</h2>
        <div className={styles.featured}></div>
      </div>
    </Layout>
  )
}
