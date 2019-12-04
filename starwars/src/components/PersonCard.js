import React from "react";
import { Card, CardBody, Col,Row, CardTitle, CardSubtitle, CardText } from "reactstrap";

const PersonCard = props => {

  return (

    <Col sm="6">
      <Card top width="100%" inverse style={{background: "#333" }}>
        <CardTitle>{props.name}</CardTitle>
        <CardBody>
          <CardSubtitle>Height:{props.height}</CardSubtitle>
          <CardSubtitle>Weight:{props.mass}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>

  )
}

export default PersonCard;