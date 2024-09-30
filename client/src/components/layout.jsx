import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"


import { Link } from "react-router-dom"
import { IoLogoMicrosoft } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MdOutlineHeadset } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";


export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export function Layout({children}) {
  return (
    <div className="grid min-h-screen relative w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 bg-black1 z-30 text-white">
      <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-secondary1 to-black1 blur-2xl top-[-43px] left-[-43px] rounded-full opacity-45  z-0"></div>
          <div className="flex h-14 items-center justify-center text-white my-10 z-30 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
            <IoLogoMicrosoft  className="h-6 w-6" />
              <span className="sofadi-one-regular ">CRM</span>
            </Link>
           
          </div>
          <div className="w-full flex justify-center font-semibold text-xl z-30 mb-10">
            <h2>Zaid Rauf</h2>
          </div>
          <div className="flex w-full">
            <nav className="grid gap-3 w-full items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to={"/"}
                className="flex hover:border border-secondary1 items-center  gap-3 rounded-xl px-1 py-2 text-white  transition-all hover:text-secondary1"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to={"/customers"}
                className="flex hover:border border-secondary1 items-center gap-3 rounded-xl px-1 py-2 text-white  transition-all hover:text-secondary1"
              >
                <MdOutlineHeadset  className="h-4 w-4" />
                Customers
              
              </Link>
              <Link
                to={"/peoples"}
                className="flex hover:border border-secondary1 items-center gap-3 rounded-xl  px-1 py-2 text-white  transition-all hover:text-secondary1"
              >
                <LuUser2  className="h-4 w-4" />
                Peoples{" "}
              </Link>
              <Link
                to={"/companies"}
                className="flex hover:border border-secondary1 items-center gap-3 rounded-xl px-1 py-2 text-white  transition-all hover:text-secondary1"
              >
                <HiOutlineBuildingStorefront className="h-4 w-4" />
                Companies
              </Link>
              <Link
                href="#"
                className="flex hover:border border-secondary1 items-center gap-3 rounded-xl px-1 py-2 text-white  transition-all hover:text-secondary1"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col ">
        <header className="flex md:h-0 h-14 items-center gap-4   px-4  lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-black1  text-white">
      <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-secondary1 to-black1 blur-2xl top-[-43px] left-[-43px] rounded-full opacity-45  z-0"></div>
              <nav className="grid gap-2 text-lg font-medium z-30">

                <Link
                  href="#"
                  className="flex items-center justify-center my-8 gap-2 text-lg font-semibold"
                >
          <IoLogoMicrosoft  className="h-6 w-6" />            
       <span className="">CRM</span>
                </Link>
                <div className="w-full flex justify-center font-semibold text-xl z-30 mb-10">
            <h2>Zaid Rauf</h2>
          </div>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-white hover:text-secondary1"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-white hover:text-secondary1"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-white hover:text-secondary1"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-white hover:text-secondary1"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-white hover:text-secondary1"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            
            </SheetContent>
          </Sheet>
         
         
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-primary1">
          {children}
        </main>
      </div>
    </div>
  )
}
