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
import { FiInbox } from "react-icons/fi";
import { CompaniesSideBar } from "./CompaniesSideBar";
import { Context } from "@/context/Context";



export function Company() {
  const{company} = useContext(Context)
  return (
    <div className="w-full p-6">
      {/* Header: Title, Search, Refresh, and Add Button */}
      <div className="w-full h-20"></div>
      <div className="flex flex-col    w-full h-[400px]  rounded-md shadow-md bg-primary2 p-10 items-center mb-4">
        <div className="flex justify-between flex-wrap mb-4 w-full">
          <div className="flex items-center gap-2">
            <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
            <h2 className="text-xl font-semibold">Company List</h2>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search" />
            <Button variant="secondary">Refresh</Button>
            <CompaniesSideBar />
          </div>
        </div>

        {/* Table with horizontal scroll */}
        <div className="w-full overflow-auto  rounded-md scroll-smooth">
          {
            company.length > 0 ?(
          
          <Table className="">
            <TableHeader>
              <TableRow className="bg-gray-200 ">
                <TableHead className="">Name</TableHead>
                <TableHead className="">Contact</TableHead>
                <TableHead className="">Country</TableHead>
                <TableHead className="">Phone</TableHead>
                <TableHead className="">Email</TableHead>
                <TableHead className="">Website</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {company.map((val, index) => (
                <TableRow key={val.index}>
                  <TableCell className="font-medium">{val.name}</TableCell>
                  <TableCell>{val.contact}</TableCell>
                  <TableCell>{val.country}</TableCell>
                  <TableCell>{val.phone}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.website}</TableCell>
                  <TableCell><Button className="bg-transparent border-2 border-transparent text-black hover:bg-transparent hover:border-gray-500 hover:border-2">...</Button></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          ): (
            <div className=" flex flex-col items-center justify-center mt-12  text-gray-600">
              <FiInbox className="h-10 w-10"/>
              <span>No data found</span></div>
          )}
        </div>
      </div>
    </div>
  );
}
