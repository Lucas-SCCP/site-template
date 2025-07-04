import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import reportWebVitals from './reportWebVitals'
import './assets/styles/default.css'
import './assets/styles/mobile.css'
import './assets/styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)

reportWebVitals()
