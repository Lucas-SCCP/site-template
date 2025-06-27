class CacheService {
  getStructure() {
    try {
      const cachedData = localStorage.getItem('websiteData')

      if (!cachedData) {
        throw new Error('Sem dados em cache')
      }

      return JSON.parse(cachedData)
    } catch (error) {
      console.error('Erro ao buscar dados do cache:', error)
      throw new Error(error)
    }
  }
}

const cacheService = new CacheService()

export default cacheService
