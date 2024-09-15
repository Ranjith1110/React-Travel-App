import React from 'react'
import Navbar from './views/Headerpage/pages/Navbar'
import "./index.css"
import Home from './views/HomePage/pages/Home'
import About from './views/AboutPage/pages/About'
import Service from './views/ServicePage/pages/Service'
import Contact from './views/ContactPage/pages/Contact'


const App = () => {
    return (
        <div className='app'>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Service></Service>
            <Contact></Contact>
        </div>
    )
}

export default App