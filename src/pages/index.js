import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"

import { Container, Row, Col } from "react-bootstrap"
import InfoCard from "../components/InfoCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Kelvin Almonte" />

    <Container>
      <Row>
        <Col xl={6}>
          <h3 style={{ color: "#bb86fc", marginTop: "20rem" }}>
            thanks for stopping by
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <h3>
            <a href="http://www.github.com/kelalm" style={{ color: "#03dac5" }}>
              github
            </a>
          </h3>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
