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
    <div className="flex h-20 px-[80px] py-[20px] items-center z-20  justify-between bg-primary max-w-[1440px]">
      <div className="flex items-center sm:w-[679px] sm:h-[52.78px]">
        <Link href="/" className="sm:mr-[118px]">
          <LogoWhite />
        </Link>
        <div className="w-full sm:w-[450px] flex justify-between sm:mr-[59px]">
          {NavBarMenu.map((datum, index) => (
            <Menu data={datum} key={index} ActiveMenu={pathname} />
          ))}
        </div>
      </div>
      <SearchBar />
      <Settings />
    </div>
  );
};

export default AdminHeader;
