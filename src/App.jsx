import React from 'react'
import Navbar from './components/Navbar'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'


const App = () => {
    return (
        <div className='app'>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/service" element={<Service></Service>} />
                <Route path="/contact" element={<Contact></Contact>} />
            </Routes>

            <Navbar></Navbar>
            
        </div>
    )
}

export default App