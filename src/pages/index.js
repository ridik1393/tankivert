import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../containers/Main/Main";

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Танки WOT" />
    <Main/>
  </React.Fragment>
)

export default IndexPage
