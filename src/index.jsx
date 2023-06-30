

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import ErrorPage from './pages/Error'
import React from 'react'
import Root from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
    {
        path: "/",
        element:<Home/>
    },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/housing/:id',
        element: <Housing />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
