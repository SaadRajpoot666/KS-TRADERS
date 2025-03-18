import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import {router} from "./Routes/router"
import { CartProvider } from './components/cartContext/cartContext'

 
createRoot(document.getElementById('root')).render(
  <>
  <CartProvider>

  <RouterProvider  router={router} />
  </CartProvider>
  </>
)
