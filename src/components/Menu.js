import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Menu({ menu }) {
  if (menu === undefined) {
    return <div>Carregando menu</div>
  }

  if (menu === null) {
    return null
  }

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu">
        <Nav className="mx-auto">
          {menu.map((element, index) => {
            // todo: criar factory para tipo de menu
            if (element.type === 'link') {
              return (
                <Nav.Link key={element.id} href={element.path} style={{ color: '#FFF' }}>
                  {element.name}
                </Nav.Link>
              )
            } else if (element.type === 'dropdown') {
              return (
                <NavDropdown
                  key={element.id}
                  title={element.name}
                  id="basic-nav-dropdown"
                  className="menu"
                >
                  {element.items.map((item, idx) => (
                    <NavDropdown.Item key={idx} href={item.path}>
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            }
            return null
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

export default Menu
