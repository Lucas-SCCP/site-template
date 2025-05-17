import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Menu from './Menu';

function Header() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Container>
                        <Row style={{ textAlign: 'center' }}>
                            <Col xs={12} md={12} lg={12} style={{ padding: '20px' }}>
                                <img
                                    src="https://placehold.co/600x400"
                                    width="200"
                                    className="d-inline-block align-top"
                                    alt="Logo do Sindicato dos Metalúrgicos de Bauru e Região"
                                    style={{ textAlign: 'center' }}
                                />
                                <br />
                                <span className='title' style={{ display: 'none' }}>Site Template</span>
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