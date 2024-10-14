import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";

export function CustomerSideBar() {
  const { people, filteredCompany, setValues,
    values,
    handleCustomerSubmit,
    handleCustomerChanges,getCustomer } = useContext(Context);

    // console.log("ID", people);
    
 
    
    

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Client</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Client</SheetTitle>
        </SheetHeader>
        <div className="grid gap-8 py-6">
          {/* Type Select */}
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              value={values.type} // Bind the selected value to state
              onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="" disabled>Select Type</option>
              <option value="people">People</option>
              <option value="company">Company</option>
            </select>
          </div>

          {/* People Select */}
       <div className="flex flex-col gap-6">
        {
          values.type === 'people' ? (
            <div className="flex flex-col items-start gap-4">
            <Label htmlFor="people">People</Label>
            <select
              id="people"
              value={values.people}
              onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="">Select</option>
              {people?.map((val, indx) => (
                <option key={val._id} value={val.firstname + " " + val.lastname }>
                  {val.firstname + " " + val.lastname}
                </option>
              ))}
            </select>
          </div>

          ):
          (
            <div className="flex flex-col items-start gap-4">
            <Label htmlFor="company">Company</Label>
            <select
              id="company"
              value={values.company}
              onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="">Select</option>
              {filteredCompany?.map((val, indx) => (
                <option key={val._id} value={val.name || val._id}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
          )
        }
        </div>
      
       </div>
          {/* Company Select */}
        

        <SheetFooter>
          <Button type="button" onClick={handleCustomerSubmit}>
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
