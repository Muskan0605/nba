import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Main from './components/Main'
import Services from './components/Services'
import Footer from './components/Footer'
import Business from './components/Business'


const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Services/>
      <Business/>
      <Footer/>
    </>
  )
}

export default App
