import React from 'react'
import SmallCards from './SmallCards'
import LargeCards from './LargeCards'
import CustomerCards from './CustomerCards'

const Dashboard = () => {
  return (
   <div className='w-full h-auto lg:p-0 p-4'>
    <div className='w-full h-20 '></div>
     <div className='w-full h-auto flex flex-wrap gap-4  justify-around mb-8'>
      <SmallCards name= "Invoices" tcolor='#87e8de'/>
      <SmallCards name= "Proforma Invoices" tcolor="#771da9"/>
      <SmallCards name= "Offers" tcolor="#389e0d"/>
      <SmallCards name= "InvoicesUnpaid" tcolor="#cd1322"/>
    </div>
    <div className='w-full h-auto flex flex-wrap lg:gap-0 gap-4 justify-around'>
      <LargeCards/>
      <CustomerCards percentage={0} activeCustomerPercentage={0.00}/>
    </div>
   </div>
  )
}

export default Dashboard