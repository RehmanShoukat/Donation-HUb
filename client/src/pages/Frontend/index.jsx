import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Gallery from './Gallery'

export default function Index() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-1'>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/gallery' element={<Gallery/>} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
