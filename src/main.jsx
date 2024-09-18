import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import ProductProvider from './contexts/ProductContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import App from './App.jsx'
import SearchProvider from './contexts/SearchContext.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ProductProvider>
          <CartProvider>
            <SearchProvider>
             <App/>
            </SearchProvider>
          </CartProvider>
      </ProductProvider>
    </StrictMode>
  </QueryClientProvider>
)
