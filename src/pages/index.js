import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import resume from "../../content/assets/resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="dennis wei" keywords={[`gatsby`, `application`, `react`]} />
    <h1>hi i'm dennis</h1>
    <p>
      during the day, i work on the experimentation team at{" "}
      <a href="https://www.atlassian.com/">atlassian</a>, writing code that
      helps users use atlassian products more effectively. at night, i muse
      about productivity tools, movies, and video game design.
    </p>
    <p>
      in the past, i studied cs and econ at columbia. during my time there, i
      worked on bloomberg's distrubed rdbms{" "}
      <a href="https://github.com/bloomberg/comdb2">comdb2</a>, researched the
      effectiveness of content surfacing through bayesian ml, and helped foster
      entrepreneurship through{" "}
      <a href="https://entrepreneurship.columbia.edu/aboutprofile/columbia-organization-of-rising-entrepreneurs-core/">
        core
      </a>
      .
    </p>
    <p>if you wanna talk, defintely reach out! i'm available through plenty of places on the internet.</p>
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
    <a href={resume}>resume</a>
    <span>&nbsp;&nbsp;</span>
    <a href="https://twitter.com/denniswei_">twitter</a>
  </Layout>
)

export default IndexPage
