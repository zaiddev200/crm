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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CustomerSideBar } from "./CustomerSideBar";
import { Context } from "@/context/Context";
import { BsThreeDots } from "react-icons/bs";

export function Customers() {
  const { customerData, deleteCustomer } = useContext(Context);
  console.log("customer", customerData);

  return (
    <div className="w-full h-[93vh] p-6">
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
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Country</TableHead>
                <TableHead className="text-center">Phone</TableHead>
                <TableHead className="text-center">Email</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.map((customer, index) => (
                <TableRow key={index}>
                  {customer.type === "people" ? (
                    <TableCell className=" flex h-14  justify-center items-center ">
                      <h3 className="text-pink-600 text-xs p-1 bg-pink-200  rounded-md">
                        {customer.type}
                      </h3>
                    </TableCell>
                  ) : (
                    <TableCell className="flex h-14  justify-center items-center ">
                      <h3 className="text-blue-600 text-xs p-1 bg-blue-200  rounded-md">
                        {customer.type}
                      </h3>
                    </TableCell>
                  )}

                  <TableCell className="text-center">{customer.name}</TableCell>
                  <TableCell className="text-center">{customer.country}</TableCell>
                  <TableCell className="text-center">{customer.phone}</TableCell>
                  <TableCell className="text-center">{customer.email}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BsThreeDots className="  w-5 h-5  duration-200" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          type="button"
                          // onClick={() => getSinglePeople(val._id)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          type="button"
                          onClick={() => deleteCustomer(customer._id)}
                        >
                          Delete
                        </DropdownMenuItem>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
