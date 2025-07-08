import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Dunia</div>
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: '/Products',
    element: <Products />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
