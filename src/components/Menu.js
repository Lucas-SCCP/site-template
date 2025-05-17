import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SocialIcons from './SocialIcons';

function Menu() {
  const elements = [
      {
          name: 'INÍCIO',
          path: '/',
          type: 'link'
      }, 
      {
          name: 'MENU 1',
          path: '/menu1',
          type: 'link'
      }, 
      {
          name: 'MENU 2',
          path: '/menu2',
          type: 'link'
      },
      {
          name: 'CONTATO',
          path: '/contato',
          type: 'link'
      },
  ];

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu">
        <Nav className="mx-auto">
          {elements.map((element, index) => {
            if (element.type === 'link') {
              return (<Nav.Link key={index} href={element.path} style={{ color: '#FFF' }}>{element.name}</Nav.Link>)
            } else if (element.type === 'dropdown') {
              return (
                <NavDropdown title={element.name} id="basic-nav-dropdown" className="menu">
                  {
                    element.items.map((element, index) => (
                      <NavDropdown.Item href={element.path}>{element.name}</NavDropdown.Item>
                    ))
                  }
                </NavDropdown>
              )
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default Menu;
