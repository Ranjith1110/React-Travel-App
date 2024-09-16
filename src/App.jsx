import React from 'react'
import Navbar from './views/Headerpage/Navbar'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './views/HomePage/Home'
import About from './views/AboutPage/About'
import Service from './views/ServicePage/Service'
import Contact from './views/ContactPage/Contact'


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