import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CustomerSideBar } from "./CustomerSideBar";
import { Context } from "@/context/Context";



export function Customers() {

  const {customerData, filteredCompany, people} = useContext(Context)
  console.log("customer" , customerData);
  
  return (
    <div className="w-full p-6">
      {/* Header: Title, Search, Refresh, and Add Button */}
      <div className="w-full h-20"></div>
      <div className="flex flex-col  w-full h-[400px]  rounded-md shadow-md bg-primary2 p-10 items-center mb-4">
        <div className="flex justify-between flex-wrap mb-4 w-full">
          <div className="flex items-center gap-2">
            <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
            <h2 className="text-xl font-semibold">Client List</h2>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search" />
            <Button variant="secondary">Refresh</Button>
            <CustomerSideBar />
          </div>
        </div>

        {/* Table with horizontal scroll */}
        <div className="w-full overflow-auto  rounded-md scroll-smooth">
          <Table className="">
            <TableHeader>
              <TableRow className="bg-gray-200 ">
                <TableHead className="">Type</TableHead>
                <TableHead className="">Name</TableHead>
                <TableHead className="">Country</TableHead>
                <TableHead className="">Phone</TableHead>
                <TableHead className="">Email</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {
              customerData.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell>{customer.type}</TableCell>
                  <TableCell>{customer.people || customer.company}</TableCell>
                  {/* <TableCell>{customer.company}</TableCell> */}
                  {/* <TableCell>{customer.phone}</TableCell> */}
                  {/* <TableCell>{customer.email}</TableCell> */}
                  <TableCell>
                    <Button variant="primary" size="small">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            
}

            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
