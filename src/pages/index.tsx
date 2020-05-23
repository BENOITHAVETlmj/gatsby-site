import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NameForm from "../components/name_form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Please submit your name</p>
    <NameForm />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to next page</Link>
  </Layout>
)

export default IndexPage
