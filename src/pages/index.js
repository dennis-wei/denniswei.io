import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="dennis wei" keywords={[`gatsby`, `application`, `react`]} />
    <h1>hi i'm dennis</h1>
    <p>
      during the day, i work on at{" "}
      <a href="https://www.getclockwise.com/">clockwise</a>, writing code that
      helps people make time to get shit done in evermore hectic work environments.
      in my own time, i make bad takes on productivity tools, cinema, and video game design.
    </p>
    <p>
      in the past, i worked on the experimentation team at{" "}
      <a href="https://www.atlassian.com">atlassian</a>, where i tried to help users
      better navigate the complexity of atlassian products.
      prior to that, i studied cs and econ at columbia. during my time there, i
      worked on bloomberg's distrubed rdbms{" "}
      <a href="https://github.com/bloomberg/comdb2">comdb2</a> and researched the
      effectiveness of content surfacing through bayesian ml.
    </p>
    <p>if you wanna talk, definitely reach out! you can find me on any of the following platforms.</p>
    <p>
      <span role="img" aria-label="Whale">
        🐳 🐳 🐳
      </span>
    </p>
    <Link to="/blog/">blog</Link>
    <span>&nbsp;&nbsp;</span>
    <a href="https://github.com/dennis-wei">github</a>
    <span>&nbsp;&nbsp;</span>
    <a href="https://www.goodreads.com/user/show/67778683-dennis">goodreads</a>
    <span>&nbsp;&nbsp;</span>
    <a href="https://letterboxd.com/dwei/">letterboxd</a>
    <span>&nbsp;&nbsp;</span>
    <a href="https://twitter.com/weibackmachine">twitter</a>
  </Layout>
)

export default IndexPage
