import React from "react"
import { Card } from "react-bootstrap"

const InfoCard = () => {
  return (
    <div>
      <Card>
        <Card.Header>Projects</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p></p>
            <p>Project 001</p>
            <p>Project 002 </p>
            <footer className="blockquote-footer">GitHub</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InfoCard
