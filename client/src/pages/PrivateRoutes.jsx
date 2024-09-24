import { Layout } from '@/components/layout'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
 const user = true

  return user ? (
    <Layout>
    <Outlet />
  </Layout> 
  ): <Navigate to={"/login"}/>
}

export default PrivateRoutes