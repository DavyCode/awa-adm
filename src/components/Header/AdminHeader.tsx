"use client";
import LogoWhite from "@/assets/icons/LogoWhite";
import { NavBarMenu } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../Menu";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";
import Settings from "../HeaderSetting";

const AdminHeader = () => {
  const pathname = usePathname();
  return (
    <div className="relative z-20 w-full bg-primary">
      <div className="flex px-[80px] py-[13.6px] items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <Link href="/" className="sm:mr-[118px]">
            <LogoWhite />
          </Link>
          <div className="flex justify-center gap-[14px] sm:mr-[59px]">
            {NavBarMenu.map((datum, index) => (
              <Menu data={datum} key={index} ActiveMenu={pathname} />
            ))}
          </div>
        </div>
        <SearchBar />
        <Settings />
      </div>
    </div>
  );
};

export default AdminHeader;
