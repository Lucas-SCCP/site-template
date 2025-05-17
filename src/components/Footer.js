import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer className="footer">
      <Container style={{ background: '#CCC', padding: '30px' }}>
        <Row className="align-items-center">
          <Col md={6} className="d-flex align-items-center">
            <img
              src="https://placehold.co/600x400"
              width="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <SocialIcons />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="footer-divider" />
            <p className="text-center mb-0">© {new Date().getFullYear()} Site Template.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;