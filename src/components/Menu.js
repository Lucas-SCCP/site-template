import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import constructorService from '../services/ConstructorService';

function Menu() {
  const [menu, setMenu] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const menu = constructorService.fetchMenu()
      setMenu(menu)
    }
    fetchData()
  }, [])

  if (menu === undefined) {
    return <div>Carregando menu</div>;
  }

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu">
        <Nav className="mx-auto">
          {menu.map((element, index) => {
            if (element.type === 'link') {
              return (<Nav.Link key={index} href={element.path} style={{ color: '#FFF' }}>{element.name}</Nav.Link>)
            } else if (element.type === 'dropdown') {
              return (
                <NavDropdown key={index} title={element.name} id="basic-nav-dropdown" className="menu">
                  {
                    element.items.map((element, idx) => (
                      <NavDropdown.Item key={idx} href={element.path}>{element.name}</NavDropdown.Item>
                    ))
                  }
                </NavDropdown>
              )
            }
            return null
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default Menu;
