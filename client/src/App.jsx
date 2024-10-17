import React from 'react'
import { Layout } from './components/layout'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './pages/PrivateRoutes'
import Dashboard from './components/Dashboard'
import Account from './components/Account'
import { Customers } from './components/Customers'
import { Peoples } from './components/People'
import { Company } from './components/Company'
import { Leads } from './components/Leads'
import { Invoices } from './components/Invoices'
import { InvoicesSideBar } from './components/InvoicesSideBar'
import { RecordPayment } from './components/PaymentRecord'

const App = () => (
  <div>
    <Account />
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/peoples' element={<Peoples />} />
        <Route path='/companies' element={<Company />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/invoices' element={<Invoices />} />
        <Route path='/invoices/create' element={<InvoicesSideBar />} />
        <Route path='/invoices/record-payment' element={<RecordPayment />} />

      </Route>

    </Routes>
  </div>
)

export default App