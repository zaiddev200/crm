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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";
import { Textarea } from "./ui/textarea";

export function LeadSideBar() {
      const {  countryData } =
    useContext(Context);

    const [phonelist, setPhoneList] = useState({})

    const getPhoneList = async () =>{
       try {
        const response = await axios.get("https://country.io/phone.json")
        setPhoneList(response)
        
    } catch (error) {
           console.log(error);
        
       }
    }

    useEffect(() =>{
        getPhoneList()
      } , [])

      console.log(phonelist);
      


    // console.log("ID", people);
    
 
    
    

  return (
    <Sheet >
      <SheetTrigger asChild >
        <Button>Add New Leads</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New leads</SheetTitle>
        </SheetHeader>
        <div className="grid gap-8 py-6 ">
          {/* Type Select */}
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="type">Branch</Label>
            <select
              id="type"
            //   value={values.type} 
            //   onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="" disabled>Select </option>
              <option value="people">Main</option>
              {/* <option value="company">Company</option> */}
            </select>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              // value={values.type} // Bind the selected value to state
              // onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="" >Select Type</option>
              <option value="people">People</option>
              <option value="company">Company</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
            //   value={formData.firstname}
            //   onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="type">Status</Label>
            <select
              id="type"
            //   value={values.type} 
            //   onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="" >Select </option>
              <option value="draft">Draft</option>
              <option value="new">New</option>
              <option value="innegociation">In Negociation</option>
              <option value="won">Won</option>
              <option value="losse">Losse</option>
              <option value="canceled">Canceled</option>
              <option value="assigned">Assigned</option>
              <option value="onhold">On Hold</option>
              {/* <option value="company">Company</option> */}
            </select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="type">Source</Label>
            <select
              id="type"
            //   value={values.type} 
            //   onChange={handleCustomerChanges}
              className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
            >
              <option value="" >Select </option>
              <option value="linkedin">Linkedin</option>
              <option value="socialmedia">Social Media</option>
              <option value="website">Website</option>
              <option value="advertising">Advertising</option>
              <option value="friend">Friend</option>
              <option value="professionalnetwork">Professional Network</option>
              <option value="customerreferral">Customer Referral</option>
              <option value="sales">Sales</option>
              <option value="other">Other</option>
              {/* <option value="company">Company</option> */}
            </select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="country">Country</Label>
            <select
      id="country"
    //   value={formData.country}
    //   onChange={handleChange}
     className="col-span-3 border border-gray-200 rounded-lg py-2"
    >
      <option value="" >Select a country</option> {/* Placeholder option */}
      {countryData?.map((country) => (
        <option key={country.cca3} value={country.name.common}>
          {country.name.common}
        </option>
      ))}
    </select>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
            //   value={formData.firstname}
            //   onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
            //   value={formData.firstname}
            //   onChange={handleChange}
              className="col-span-3"
            />
            <div className="flex flex-col items-start w-full gap-4">
            <Label htmlFor="project">Project</Label>
            <Textarea
              id="project"
            //   value={formData.firstname}
            //   onChange={handleChange}
              className="col-span-3 "
            />
          </div>
          </div>
       </div>
          {/* Company Select */}
        

        <SheetFooter>
          <Button type="button"     >
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
