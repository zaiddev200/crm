import React from 'react'
import SmallCards from './SmallCards'
import LargeCards from './LargeCards'
import { CustomerCards } from './CustomerCards'

const Dashboard = () => {
  return (
   <div>
    <div className='w-full h-20 '></div>
     <div className='w-full flex justify-around mb-8'>
      <SmallCards name= "Invoices" tcolor='#87e8de'/>
      <SmallCards name= "Proforma Invoices" tcolor="#771da9"/>
      <SmallCards name= "Offers" tcolor="#389e0d"/>
      <SmallCards name= "InvoicesUnpaid" tcolor="#cd1322"/>
    </div>
    <div className='w-full flex justify-around'>
      <LargeCards/>
      {/* <CustomerCards/> */}
    </div>
   </div>
  )
}

export default Dashboard