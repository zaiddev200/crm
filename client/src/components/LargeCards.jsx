import React from 'react'
import { Progress } from "@/components/ui/progress"


const LargeCards = () => {
  return (
    <div className='lg:w-[880px] w-auto h-auto  lg:h-[400px]  rounded-md shadow-md bg-primary2 flex flex-wrap justify-around'>

        <div className='w-[260px] h-auto  px-4 py-6'>
            <div>
                <h2 className='text-xl font-sans font-semibold text-gray-700 '>Invoices</h2>
            </div>
            <div className='mt-10'>
                <ul>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Draft</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Pending</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Unpaid</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Overdue</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Partially</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Paid</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-[260px] h-auto  px-4 py-6'>
            <div>
                <h2 className='text-xl font-sans font-semibold text-gray-700 '>Proforma Invoices</h2>
            </div>
            <div className='mt-10'>
                <ul>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Draft</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Pending</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Sent</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Declined</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Accepted</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Expired</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-[260px] h-auto  px-4 py-6'>
            <div>
                <h2 className='text-xl font-sans font-semibold text-gray-700 '>Offer</h2>
            </div>
            <div className='mt-10'>
                <ul>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Draft</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Pending</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Sent</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Declined</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Accepted</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                    <li>
                        <div className='flex justify-between mt-3 mb-1'>
                        <span className='text-sm font-semibold text-gray-700'>Expired</span>
                        <span className='text-sm font-semibold text-gray-800'>0%</span>
                        </div>
                        <Progress value={0} className="w-[100%]" />
                    </li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default LargeCards