"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HeaderSettingsIcon from "@/assets/icons/HeaderSettingsIcon";
import HeaderNotificationsIcon from "@/assets/icons/HeaderNotificationsIcon";
import ArrowDown from "@/assets/icons/ArrowDown";
import Avatar from "../../../public/avatar.png";
import UserDropdown from "../UserSettingDropdown";

const Settings = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="w-full sm:w-[191px] sm:h-[40px] flex items-center justify-between gap-x-4 sm:ml-8 border-b-[rgba(241, 241, 241, 0.30)]">
      <span className="cursor-pointer">
        <HeaderSettingsIcon />
      </span>
      <span className="cursor-pointer">
        <HeaderNotificationsIcon />
      </span>
      <div
        className="flex items-center gap-2 w-full sm:w-[65px] cursor-pointer"
        onClick={() => setIsDropdownOpen(true)}
      >
        <div className="sm:w-[40px] sm:h-[40px] rounded-full relative">
          <Image src={Avatar} fill alt="avatar" object-cover />
        </div>
        <span>
          <ArrowDown stroke="#fff" />
        </span>
      </div>
      {isDropdownOpen && (
        <UserDropdown
          onClose={() => setIsDropdownOpen(false)}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </div>
  );
};

export default Settings;
