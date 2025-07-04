import { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

import constructorService from './ConstructorService'

function PageRendererService({ page }) {
  return (
    <Suspense fallback={<div>Carregando elementos...</div>}>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.title} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.title} />
        <meta property="og:image" content={page.title} />
      </Helmet>
      <Container>
        <Row id="page" style={{ padding: '20px' }}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={{ span: 6, offset: 3 }}
            className="destaque border-primaria"
          >
            {page.components.map((component, index) => (
              <Row id="component" key={component.id}>
                {constructorService.createComponent(component)}
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
}

export default PageRendererService
