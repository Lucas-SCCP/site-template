import apiService from './ApiService'
import cacheService from './CacheService'

class ConstructorService {
  async fetchWebsiteFromApi() {
    const websiteId = parseInt(process.env.REACT_APP_WEBSITE_ID, 10)

    const website = await apiService.getStructure(websiteId)
    if (!website) {
      throw new Error('Site não encontrado')
    }

    console.log(website)
    localStorage.setItem('websiteData', JSON.stringify(website))

    return website
  }

  fetchWebsiteFromCache() {
    const website = cacheService.getStructure()
    if (!website) {
      throw new Error('Site não encontrado')
    }

    return website
  }

  fetchMenu() {
    const websiteStructure = this.fetchWebsiteFromCache()

    return websiteStructure.pages.map(page => ({
      id: page.id,
      name: page.name,
      path: page.path,
      type: 'link'
    }))
  }
}

const constructorService = new ConstructorService()

export default constructorService