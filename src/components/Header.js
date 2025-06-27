import { useEffect, useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import Menu from './Menu'
import constructorService from '../services/ConstructorService'

function Header() {
  const [menu, setMenu] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const menu = await constructorService.fetchMenu()
      setMenu(menu)
    }
    fetchData()
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Container>
            <Row style={{ textAlign: 'center' }}>
              <Col xs={12} md={12} lg={12} style={{ padding: '20px' }}>
                <img
                  src="https://placehold.co/400"
                  width="200"
                  className="d-inline-block align-top"
                  alt="Logo"
                  style={{ textAlign: 'center' }}
                />
                <br />
                <span className="title" style={{ display: 'none' }}>
                  Site Template
                </span>
              </Col>
            </Row>
          </Container>
        </Col>
        {Array.isArray(menu) && menu.length > 0 && (
          <Col className="cor-primaria">
            <Container>
              <Navbar expand="lg">
                <Menu menu={menu} />
              </Navbar>
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Header
