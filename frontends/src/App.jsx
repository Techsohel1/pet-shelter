import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import DonationForm from './component/DonationForm'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/donate' element={<DonationForm/>}/>
    </Routes>
    </>
  )
}

export default App
