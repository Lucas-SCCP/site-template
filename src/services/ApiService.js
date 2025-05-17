class ApiService {

  async getStructure(id) {
    try {
      const response = await fetch(process.env.REACT_APP_API + '/website/' + id + '/structure');
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      const json = await response.json();

      return json.data
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  }
}

const apiService = new ApiService();

export default apiService;
