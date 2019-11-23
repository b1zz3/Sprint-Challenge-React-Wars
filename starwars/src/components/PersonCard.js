import React from "react";
// import { Card, CardBody, Col,Row, CardTitle } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
const PersonCard = props => {
  return (

    <ListGroup>
      <ListGroupItem color="dark">{props.name}</ListGroupItem>
    </ListGroup>

    // <div key="props">
    //   <Col sm="4">
    //     <Card inverse style={{background: "#333" }}>
    //       <CardTitle>{props.name}</CardTitle>
    //     </Card>
    //   </Col>
    // </div>
  )
}

export default PersonCard;