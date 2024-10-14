import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PeopleSideBar } from "./PeopleSideBar";
import { Context } from "@/context/Context";
import { FiInbox } from "react-icons/fi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";

export function Peoples() {
  const { people, handleSearchChange, searchTerm, filteredPeople , deletePeople,getSinglePeople } =
    useContext(Context);
  // console.log("hello", people);

  // Fetch people data when component mounts

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
              value={searchTerm} // Bind input value to searchTerm
              onChange={handleSearchChange}
              placeholder="Search"
            />
            <Button variant="secondary">Refresh</Button>
            <PeopleSideBar />
          </div>
        </div>

        {/* Table with horizontal scroll */}
        <div className="w-full overflow-auto rounded-md scroll-smooth">
          {filteredPeople.length > 0 ? (
            <Table className="">
              <TableHeader>
                <TableRow className="bg-gray-200 ">
                  <TableHead>Firstname</TableHead>
                  <TableHead>Lastname</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody >
                {filteredPeople.map((val, index) => (
                  <TableRow  key={val._id} >
                    <TableCell className="font-medium  h-14">
                      {val.firstname}
                    </TableCell>
                    <TableCell>{val.lastname}</TableCell>
                    <TableCell>{val.company}</TableCell>
                    <TableCell>{val.country}</TableCell>
                    <TableCell>{val.phone}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell >
                      {/* <Button className="bg-transparent border-2 border-transparent text-black hover:bg-transparent hover:border-gray-500 hover:border-2">
                        
                      </Button> */}
                      <DropdownMenu >
                        <DropdownMenuTrigger ><BsThreeDots className="  w-5 h-5  duration-200"/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem type="button" onClick={() => getSinglePeople(val._id)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem type="button" onClick={() => deletePeople(val._id)}>Delete</DropdownMenuItem>
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
