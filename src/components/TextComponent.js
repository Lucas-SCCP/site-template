import { Row, Col } from 'react-bootstrap'

import constructorService from '../services/ConstructorService'

const TextComponent = (component) => {
  return (
    <Col key={component.id} xs={12} md={12} lg={component.size}>
      <Row id="element">
        {Object.values(component.elements.content).map((content) =>
          constructorService.createElement(content)
        )}
      </Row>
    </Col>
  )
}

export default TextComponent
