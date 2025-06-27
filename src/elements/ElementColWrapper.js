import { Col } from 'react-bootstrap'

const ElementColWrapper = ({ element, children }) => (
  <Col key={element.id} xs={12} md={12} lg={element.size}>
    {children}
  </Col>
)

export default ElementColWrapper
