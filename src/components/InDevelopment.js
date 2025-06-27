import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/ctcleanfoods_emconstrucao.png'

function InDevelopment() {
  return (
    <Container fluid className='in-dev'>
      <Row>
        <Col className='centralizar'>
          <img src={logo} alt='logo' width='400em'/>
        </Col>
      </Row>
    </Container>
  )
}

export default InDevelopment