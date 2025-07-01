import { useState } from 'react'
import './App.css'
// import Navbar from './Components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './pages/page'



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Page/>} />
      {/* <Route path="/about" element = {<Page/>} /> */}
    </Routes>
    </BrowserRouter>   
    </div>
  )
}

export default App
