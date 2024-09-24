import React from 'react'
import { Layout } from './components/layout'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './pages/PrivateRoutes'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

const App = () => {
  return (
    <div>
       <Routes>
       <Route element={<PrivateRoutes />}>
       <Route path='/' element={<Dashboard />} />
       <Route path='/home' element={<Home />} />
      
       </Route>

       </Routes>
    </div>
  )
}

export default App