import { Container, Row, Col } from 'react-bootstrap'

function InDevelopment() {
  return (
    <Container fluid className="in-dev">
      <Row>
        <Col className="centralizar">
          <img src="https://placehold.co/400x400" alt="logo" width="400em"/>
        </Col>
      </Row>
    </Container>
  );
}

export default InDevelopment;