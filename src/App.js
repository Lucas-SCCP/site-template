import React, { useEffect, useState, Suspense } from 'react'
import { Row, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import AnalyticsService from './services/AnalyticsService'
import ApiService from './services/ApiService'
import { createElement } from './services/ElementsService'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {

  const [website, setWebsite] = useState(null)

  useEffect(() => {
    // AnalyticsService.initialize();
    const fetchData = async () => {
      const result = await ApiService.getStructure(1)
      setWebsite(result)
    }
    fetchData()
  }, [])

  if (!website) {
    return <div>Carregando</div>;
  }
  
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          {website.pages.map((page) => (
            <Route key={page.path} path={page.path} element={<DefaultComponent page={page} />} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

function DefaultComponent({ page }) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Container>
        <Row>
        {page.components.map((component, index) => {
          return Object.values(component.elements.content).map((content, idx) => {
            return (
              createElement(content)
            )
          })
        })}
        </Row>
      </Container>
    </Suspense>
  )
}

function DefaultLayout() {
  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default App;
