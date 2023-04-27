import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ErrorPage from './pages/Error'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  {<Header />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  {<Footer/>}
  </BrowserRouter>
)
