import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Home from './pages/Home'
import Footer from './Footer/Footer'


export default function App() {

  return (
    <>  
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}
