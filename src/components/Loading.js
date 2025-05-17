import { Container, Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Spinner animation="border" role="status" />
      <p className="mt-3">CARREGANDO</p>
    </Container>
  )
}

export default Loading