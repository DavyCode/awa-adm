"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/icons/Logo";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="fixed z-20 flex items-center justify-between w-full h-10 px-3 py-8 bg-white shadow-md sm:px-20">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
