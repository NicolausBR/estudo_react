import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


import 'primereact/resources/themes/lara-light-green/theme.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  </PrimeReactProvider>
)
