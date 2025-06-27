class ApiService {
  async getStructure(id) {
    try {
      const response = await fetch(process.env.REACT_APP_API + '/website/' + id + '/structure')
      if (!response.ok) {
        throw new Error(response.status)
      }
      const json = await response.json()

      return json.data
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error)
      throw new Error(error)
    }
  }
}

const apiService = new ApiService()

export default apiService
