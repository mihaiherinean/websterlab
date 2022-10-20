import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Home/>}/>
      <Route path='/' element={<Layout/>}>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes