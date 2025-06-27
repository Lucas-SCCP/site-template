import { Suspense } from 'react'
import { Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

import { createElement } from '../services/ElementsService'

function PageRenderer({ page }) {
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
        <Row>
          {page.components.map((component) => {
            return Object.values(component.elements.content).map((content) => {
              return createElement(content)
            })
          })}
        </Row>
      </Container>
    </Suspense>
  )
}

export default PageRenderer