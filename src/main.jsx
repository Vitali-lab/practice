import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Blog } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store.js'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Blog />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
