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

 
export function PeopleSideBar() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button >Add New Person</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase ">Add New Person</SheetTitle>
         
        </SheetHeader>
        <div className="grid gap-8 py-6 ">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" >
              Firstname
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" >
              Lastname
            </Label>
            <Input id="Lastname" className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="company" >
              Company
            </Label>
            <Input id="company" className="col-span-3" />
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