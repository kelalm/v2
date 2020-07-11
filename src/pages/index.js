import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Kelvin Almonte" />
    <h1>Kelvin Almonte</h1>

    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
