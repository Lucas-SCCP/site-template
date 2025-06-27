import { Container, Row, Col } from 'react-bootstrap'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <footer className='footer'>
      <Container style={{ background: '#000', padding: '30px', fontSize: '14px', color: '#BBB' }}>
        <Row className='align-items-center'>
          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center' style={{ marginBottom: '30px' }}>
            <SocialIcons />
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={12}>
            <hr className='footer-divider' />
            <p className='text-center mb-0'>© {new Date().getFullYear()} Site Template</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer