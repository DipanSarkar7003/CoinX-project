import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Exchanges from './components/Exchanges/Exchanges'
import Navbar from './components/Navbar/Navbar'
import Coins from './components/Coins/Coins'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
  
    
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={  <Home/>}/>
  <Route path='/exchanges' element={  <Exchanges/>}/>
  <Route path='/coins' element={  <Coins/>}/>
  <Route path='*' element={<ErrorPage/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App
