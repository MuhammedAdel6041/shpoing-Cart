import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>

    </BrowserRouter>

  </StrictMode>,
)
