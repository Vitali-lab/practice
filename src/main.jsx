import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Blog} from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Blog />
    </BrowserRouter>
  </StrictMode>,
)
