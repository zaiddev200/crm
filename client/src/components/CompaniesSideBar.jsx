import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

 
export function CompaniesSideBar() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button >Add New Company</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase ">Add New Company</SheetTitle>
         
        </SheetHeader>
        <div className="grid gap-8 py-6 ">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" >
              Name
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="contact" >
              Contact
            </Label>
            <Input id="contact" className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="country" >
              Country
            </Label>
            <Input id="country" className="col-span-3" />
          </div>
          
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="phone" >
              Phone
            </Label>
            <Input id="phone" className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="email" >
              Email
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="website" >
              Website
            </Label>
            <Input id="website" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}