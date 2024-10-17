import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { FiInbox } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Context } from "@/context/Context";
import { Navigate, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

export function Invoices() {
    const { invoiceData, deleteInvoices, getSingleInvoice } = useContext(Context);
    const navigate = useNavigate()
  
  return (
    <div className="w-full h-[93vh] p-6">
    {/* Header: Title, Search, Refresh, and Add Button */}
    <div className="w-full h-20"></div>
    <div className="flex flex-col justify-between w-full h-auto rounded-md shadow-md bg-primary2 p-10 items-center mb-4">
      <div className="flex justify-between flex-wrap mb-4 w-full">
        <div className="flex items-center gap-2">
          <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
          <h2 className="text-xl font-semibold">Client List</h2>
        </div>
        <div className="flex gap-2">
          <Input
            // value={searchTerm} // Bind input value to searchTerm
            // onChange={handleSearchChange}
            placeholder="Search"
          />
          <Button variant="secondary">Refresh</Button>
          <Button onClick={() => navigate("/invoices/create")}>+ Add New Invoice</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto rounded-md">
        {invoiceData.length > 0 ? (
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-center">Number</TableHead>
                <TableHead className="text-center">Client</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Expired Date</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="text-center">Paid</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Payment</TableHead>
                <TableHead className="text-center">Created By</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {invoiceData.map((invoice, index) => (
               
                
                <TableRow key={index}>
                  <TableCell className="text-center">{invoice.number}</TableCell>
                  <TableCell className="text-center">{invoice.client}</TableCell>
                  <TableCell className="text-center">{invoice.date.slice(0, 10)}</TableCell>
                  <TableCell className="text-center">{invoice.expiredDate.slice(0, 10)}</TableCell>
                  <TableCell className="text-center">{invoice.total + " " + invoice.currency}</TableCell>
                  <TableCell className="text-center">{invoice.paid}</TableCell>
                  <TableCell className="text-center">{invoice.status}</TableCell>
                  <TableCell className="text-center">{
                    invoice.total === invoice.paid ? (<h3>paid</h3>):(<h3>unpaid</h3>)
                    }</TableCell>
                  <TableCell className="text-center">zaid</TableCell>
                  <TableCell>
                  <DropdownMenu >
                        <DropdownMenuTrigger ><BsThreeDots className="  w-5 h-5  duration-200"/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem type="button" onClick={() => getSinglePeople(val._id)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem type="button" onClick={() => deleteInvoices(invoice._id)}>Delete</DropdownMenuItem>
                          <DropdownMenuItem type="button"onClick={() => {navigate("/invoices/record-payment" ), getSingleInvoice(invoice._id)} }>Payment</DropdownMenuItem>
                          <DropdownMenuItem>Show</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12 text-gray-500">
            <FiInbox className="w-10 h-10" />
            <span>No data</span>
          </div>
        )} 
      </div>
    </div>
    </div>
  );
}
