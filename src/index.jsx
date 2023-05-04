// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import ErrorPage from './pages/Error'
// import Housing from './pages/Housing'


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <BrowserRouter>
//   {<Header />}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path='/about' element={<About/>} />
//       <Route path="/housing/:id" element={<Housing/>} />
//       <Route path='*' element={<ErrorPage/>} />
//     </Routes>
//   {<Footer/>}
//   </BrowserRouter>
// )






import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
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
