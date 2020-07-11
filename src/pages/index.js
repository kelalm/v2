import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Row, Col } from "react-bootstrap"
import InfoCard from "../components/InfoCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Kelvin Almonte" />

    <Container>
      <Row>
        <Col xl={6}>
          <h1>Kelvin Almonte</h1>
        </Col>
        <Col xl={6}>
          <InfoCard />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
