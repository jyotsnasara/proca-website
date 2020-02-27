/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"
import { Container, Paper } from "@material-ui/core"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Paper elevation={0}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="xl">
        <main>{children}</main>
      </Container>
      <footer></footer>
    </Paper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
