import apiService from './ApiService'
import cacheService from './CacheService'
import { Col } from 'react-bootstrap'
import ComponentFactory from '../factories/ComponentFactory'
import ElementFactory from '../factories/ElementFactory'

class ConstructorService {
  async fetchWebsiteFromApi() {
    const websiteId = parseInt(process.env.REACT_APP_WEBSITE_ID, 10)

    const website = await apiService.getStructure(websiteId)
    if (!website) {
      throw new Error('Site não encontrado')
    }

    localStorage.setItem('websiteData', JSON.stringify(website))

    return website
  }

  async fetchWebsiteFromCache() {
    const website = cacheService.getStructure()
    if (!website) {
      throw new Error('Site não encontrado')
    }

    return website
  }

  async fetchMenu() {
    const websiteStructure = await this.fetchWebsiteFromCache()

    return websiteStructure.pages
      .filter(page => page.menu === 1)
      .map(page => ({
        id: page.id,
        name: page.name,
        path: page.path,
        type: 'link',
      }))
  }

  createComponent(component) {
    return ComponentFactory.create(component)
  }

  createElement(element) {
    return ElementFactory.create(element)
  }

  createLine(element) {
    // VERIFICAR SE VAI SER UTILIZAVEL
    return (
      <Col key={element.id} xs={12} md={12} lg={element.size}>
        {ElementFactory.create(element.type, element)}
      </Col>
    )
  }
}

const constructorService = new ConstructorService()

export default constructorService