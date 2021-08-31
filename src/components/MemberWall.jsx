import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";


function MemberWall({ members }) {
  return (
    <Container>
      <Row>
        {members.map((member) => (
          <Col key={member.login} md={4}>
            <Image src={member.avatar_url} height='100' alt={`${member.login}'s profile picture`}  roundedCircle />
            <h3>{member.login}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
}



export default MemberWall;