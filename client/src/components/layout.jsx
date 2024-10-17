import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { IoLogoMicrosoft } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MdOutlineHeadset } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

export function Layout({ children }) {
  return (
    <div className="grid min-h-screen relative  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 shadow-xl bg-black1 z-30 text-white">
          {/* <div className="absolute w-[260px] h-[260px]  bg-gradient-to-r from-secondary1 to-black1 blur-2xl top-[-40px] left-[-40px] rounded-full opacity-40  z-0"></div> */}
          <div className="flex h-14 items-center justify-center text-white my-10 z-30 px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 font-semibold">
              {/* <IoLogoMicrosoft className="h-6 w-6" /> */}
              <span className="sofadi-one-regular">CRM</span>
            </NavLink>
          </div>
          <div className="w-full flex justify-center font-semibold text-xl z-30 mb-10">
            <h2>Zaid Rauf</h2>
          </div>
          <div className="flex w-full">
            <nav className="grid gap-3 w-full items-start pl-2 text-sm font-medium lg:pl-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1  bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <Home className="h-4 w-4" />
                Dashboard
              </NavLink>
              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <MdOutlineHeadset className="h-4 w-4" />
                Customers
              </NavLink>
              <NavLink
                to="/peoples"
                className={({ isActive }) =>
                  isActive
                   ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <LuUser2 className="h-4 w-4" />
                Peoples
              </NavLink>
              <NavLink
                to="/companies"
                className={({ isActive }) =>
                  isActive
                     ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <HiOutlineBuildingStorefront className="h-4 w-4" />
                Companies
              </NavLink>
              <NavLink
                to="/leads"
                className={({ isActive }) =>
                  isActive
                     ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <LineChart className="h-4 w-4" />
                Leads
              </NavLink>
              <NavLink
                to="/invoices"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                }
              >
                <MdOutlineHeadset className="h-4 w-4" />
                Invoices
              </NavLink>
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
            <SheetContent
              side="left"
              className="flex flex-col bg-black1  text-white"
            >
              <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-secondary1 to-black1 blur-2xl top-[-43px] left-[-43px] rounded-full opacity-45  z-0"></div>
              <nav className="grid gap-2 text-lg font-medium z-30">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                       ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 to-black1  bg-secondary2"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                  }
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    isActive
                       ? "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-secondary1 bg-gradient-to-r from-secondary2 via-secondary2 to-black1"
                    : "flex items-center gap-3 pl-3 py-2 rounded-tl-lg rounded-bl-lg text-white hover:bg-[#9393934a]"
                  }
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </NavLink>
                {/* Other links */}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-3 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-primary1">
          {children}
        </main>
      </div>
    </div>
  );
}
