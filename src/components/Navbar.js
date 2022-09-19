// import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     site {
  //       siteMetadata {
  //         copyright
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)
  // const { title, description, copyright } = data.site.siteMetadata
  return (
    <nav>
      <div className="links">
        <Link className="active_class" to="/">
          Home
        </Link>
        <Link className="active_class" to="/about">
          About
        </Link>
        <Link className="active_class" to="/projects">
          Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
