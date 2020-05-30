import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NameForm from "../components/name_form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Mon blog</h1>
    <NameForm />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to next page</Link>
    <Link to="/summary/">Go to summary page</Link>
  </Layout>
)

export default IndexPage
