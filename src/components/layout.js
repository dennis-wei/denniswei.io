/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 8% 0 8%`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: `5%`,
    }}
  >
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
