import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Menu from './Menu';

function Header() {
  return (
    <Container fluid style={{ backgroundColor: '#000' }}>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Container>
            <Row className='titulo-linha'>
              <Col className='titulo-coluna-esquerda' xs={12} sm={6} md={6} lg={6}>
                <span className='titulo-texto-esquerda modak-regular-400' >
                  NOIS
                </span>
              </Col>
              <Col className='titulo-coluna-direita' xs={12} sm={6} md={6} lg={6}>
                <span className='titulo-texto-direita krona'> DESENVOLVIMENTO <br />DE SOFTWARE</span>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className='cor-primaria'>
          <Container>
            <Navbar expand="lg">
              <Menu />
            </Navbar>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;