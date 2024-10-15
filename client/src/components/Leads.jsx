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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { LeadSideBar } from "./LeadSideBar";

export function Leads() {
  const { leadData, deleteLead } = useContext(Context);

  return (
    <div className="w-full h-[93vh] p-6">
      {/* Header: Title, Search, Refresh, and Add Button */}
      <div className="w-full h-20"></div>
      <div className="flex flex-col    w-full h-[400px]  rounded-md shadow-md bg-primary2 p-10 items-center mb-4">
        <div className="flex justify-between flex-wrap mb-4 w-full">
          <div className="flex items-center gap-2">
            <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
            <h2 className="text-xl font-semibold">Company List</h2>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Search"
              // onChange={handleSearchCompanyChange}
              // value={searchCompany}
            />
            <Button variant="secondary">Refresh</Button>
            <LeadSideBar />
          </div>
        </div>

        {/* Table with horizontal scroll */}
        <div className="w-full overflow-auto  rounded-md scroll-smooth">
          {leadData.length > 0 ? (
            <Table className="">
              <TableHeader>
                <TableRow className="bg-gray-200 ">
                  <TableHead className="text-center">Branch</TableHead>
                  <TableHead className="text-center">Type</TableHead>
                  <TableHead className="text-center">Name</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Source</TableHead>
                  <TableHead className="text-center">Phone</TableHead>
                  <TableHead className="text-center">Email</TableHead>
                  <TableHead className="text-center">Country</TableHead>
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leadData?.map((val, index) => (
                  <TableRow key={val.index}>
                    <TableCell className="font-medium flex justify-center items-center mt-2 h-14 ">
                    <h3 className="font-semibold text-xs p-1 bg-gray-200  rounded-md">
                          {val.branch}
                        </h3>
                    </TableCell>
                    <TableCell>
                    {val.type === "people" ? (
                      <TableCell className=" flex h-14  justify-center items-center ">
                        <h3 className="text-pink-600 text-xs p-1 bg-pink-200  rounded-md">
                          {val.type}
                        </h3>
                      </TableCell>
                    ) : (
                      <TableCell className="flex h-14  justify-center items-center ">
                        <h3 className="text-blue-600 text-xs p-1 bg-blue-200  rounded-md">
                          {val.type}
                        </h3>
                      </TableCell>
                    )}
                    </TableCell>
                    <TableCell className="text-center ">{val.name}</TableCell>
                    <TableCell className="text-center ">{val.status}</TableCell>
                    <TableCell className="text-center ">{val.source}</TableCell>
                    <TableCell className="text-center ">{val.phone}</TableCell>
                    <TableCell className="text-center ">{val.email}</TableCell>
                    <TableCell className="text-center ">{val.country}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <BsThreeDots className="  w-5 h-5  duration-200" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            type="button"
                            onClick={() => getSinglePeople(val._id)}
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            type="button"
                            onClick={() => deleteLead(val._id)}
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
          ) : (
            <div className=" flex flex-col items-center justify-center mt-12  text-gray-600">
              <FiInbox className="h-10 w-10" />
              <span>No data found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
