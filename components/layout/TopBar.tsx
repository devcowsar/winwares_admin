"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const TopBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="" width={150} height={70} />
      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            className={`flex items-center gap-4 text-body-medium ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
            href={link.url}
            key={link.label}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center relative">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        />
        {dropDownMenu && (
          <div className="flex flex-col gap-8 p-5 shadow-xl bg-white rounded-lg absolute top-10 right-6">
            {navLinks.map((link) => (
              <Link
                className="flex items-center gap-4 text-body-medium"
                href={link.url}
                key={link.label}
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
