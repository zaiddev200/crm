import React, { useState } from "react";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IoMdArrowRoundBack } from "react-icons/io";
import { PeopleSideBar } from "./PeopleSideBar";


const Peoples = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Dummy data for the table
  const tableData = [
    {
      type: "Zaid",
      name: " Rauf",
      country: "Pakistan",
      phone: "93493289389e",
      email: "zaidrauf005@gmail.com",
    },
    // Add more data if needed
  ];



  return (
    <div className='w-full h-auto lg:p-4 p-6'>
      <div className='w-full h-20'></div>
      <div className='w-full h-[400px] rounded-md shadow-md bg-primary2 p-10 '>
        <div className='w-full h-auto flex justify-between'>
          <div className='flex items-center gap-3'>
            <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
            <h2 className='text-xl font-semibold'>People List</h2>
          </div>
          <div className='flex gap-2'>
            <Input />
            <Button variant="secondary">Refresh</Button>

            {/* Add New Client Button with SheetTrigger */}
           <PeopleSideBar/>
          </div>
        </div>

        <div className="py-4 w-full">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Firstname
                </th>
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lastname
                </th>
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
               
                <th className="border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index} className="bg-white">
                   <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    {data.type}
                  </td>
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    {data.name}
                  </td>
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">🇵🇰 {data.country}</span>
                  </td>
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    {data.phone}
                  </td>
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    {data.email}
                  </td>
                
                  <td className="border border-gray-200 px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">•••</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination (optional) */}
          {/* <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              &lt;
            </button>
            <span className="text-sm font-medium text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              &gt;
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Peoples;
