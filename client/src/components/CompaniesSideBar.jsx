import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Context } from "@/context/Context";
import { useContext } from "react";

export function CompaniesSideBar() {
  const {
    companyFormData,
    handleCompanySubmit,
    handleCompanyChange,
  } = useContext(Context);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Company</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase ">Add New Company</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleCompanySubmit}>
          <div className="grid gap-8 py-6">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={companyFormData.name}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                value={companyFormData.contact}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={companyFormData.country}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={companyFormData.phone}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={companyFormData.email}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={companyFormData.website}
                onChange={handleCompanyChange}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
