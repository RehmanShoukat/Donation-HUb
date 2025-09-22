import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'

const Inddex = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='auth/*' element={<Auth/>}/>
        <Route path='dashboard/*' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default Inddex
