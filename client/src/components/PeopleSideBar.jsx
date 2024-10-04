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
import { Context } from "@/context/Context"
import { useContext } from "react"

 
export function PeopleSideBar() {
  const {handleChange , formData, handleSubmit} = useContext(Context)


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Person</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Person</SheetTitle>
        </SheetHeader>
        <div className="grid gap-8 py-6">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="firstname">Firstname</Label>
            <Input
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="lastname">Lastname</Label>
            <Input
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleSubmit}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}