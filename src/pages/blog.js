import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogHome extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="words by dwei"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2>words by dwei</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={"/blog" + node.fields.slug}>
                {title}
              </Link>
              <br></br>
              <small>
                  {node.frontmatter.description || node.excerpt}
              </small>
              <br></br>
              <small>{node.frontmatter.date + " - " + node.fields.readingTime.text}</small>
              <br></br>
              <br></br>
            </div>
          )
        })}
        <hr
          style={{
            marginBottom: 0,
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 10,
          }}
        >
          <li>
            <Link to={"/"}>
                ← Home
            </Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogHome

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
             }
           }
           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                   readingTime {
                     text
                   }
                 }
                 frontmatter {
                   date(formatString: "MMMM DD, YYYY")
                   title
                   description
                 }
               }
             }
           }
         }
       `
