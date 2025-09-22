import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

export default function index() {
    return (
        <div className='sticky top-0 z-100'>
            <Topbar />
            <Navbar />
        </div>
    )
}
