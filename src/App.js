import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import constructorService from './services/ConstructorService'

import PageRendererService from './services/PageRendererService'
import MainLayout from './components/MainLayout'
import Loading from './components/Loading'

function App() {

  const [website, setWebsite] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const website = await constructorService.fetchWebsiteFromApi()
        setWebsite(website)
        console.log('website', website)
      } catch (error) {
        console.error('Erro ao fazer conexão com a API:', error.message)

        try {
          const website = constructorService.fetchWebsiteFromCache()
          if (!website) {
            throw new Error('Nenhum cache encontrado')
          }

          console.warn('Usando dados do cache para construção do site')
          setWebsite(website)
        } catch (error) {
          console.error('Erro ao carregar o site: ', error.message)
          setWebsite({ error: true })
        }
      }
    }
    fetchData()
  }, [])

  if (website === undefined) {
    return <Loading />
  }
  
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {website.pages.map((page) => (
            <Route key={page.path} path={page.path} element={<PageRendererService page={page} />} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}

export default App