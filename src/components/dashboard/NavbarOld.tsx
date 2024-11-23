import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import SchoolSyncLogo from "@/components/SchoolSyncLogo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2 px-4 py-4">
      {/* LEFT */}
      <div className="flex justify-start items-center gap-2">
        <div className="flex gap-2 items-center">
          <SchoolSyncLogo />
        </div>
        <Separator orientation="vertical" className="hidden sm:block h-6" />
        <Breadcrumb>
          <BreadcrumbList className="hidden sm:flex flex-nowrap justify-between mt-1">
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Admin</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* RIGHT */}
      <div className="w-full flex items-center justify-end gap-4 md:gap-6 py-4 mt-1">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Messages" width={16} height={16} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="Announcements" width={18} height={18} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col items-end md:hidden">
          <span className="text-xs leading-3 font-medium">DDC</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Avatar className="">
          <AvatarImage src="https://github.com/durjoydutta.png" alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;