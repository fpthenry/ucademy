"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}
const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  console.log("isactive", pathName);
  return (
    <Link
      className={`p-3 rounded-md flex items-center gap-3 
             transition-all duration-200 ${
               isActive
                 ? "text-white bg-yellow-500 svg-animate"
                 : "hover:bg-blue-600/10 hover:text-blue-600"
             }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
