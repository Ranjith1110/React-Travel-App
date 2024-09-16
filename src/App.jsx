import React from 'react'
import Navbar from './components/Navbar'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'


const App = () => {
    return (
        <div className='app'>

            <Routes>
                <Route path="/home" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/service" element={<Service></Service>} />
                <Route path="/contact" element={<Contact></Contact>} />
            </Routes>

            <Navbar></Navbar>
            
        </div>
    )
}

export default App