import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import useAuth from '@/hooks/useAuth';
import Link from "next/link";

interface DropdownProps {
  onClose: () => void;
  setIsDropdownOpen: (arg: boolean) => void;
}

const UserDropdown: React.FC<DropdownProps> = ({
  onClose,
  setIsDropdownOpen,
}) => {
  // const user = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    /* Logout functionality here */
    onClose();
  };

  const handleItemClick = () => {
    // Close the dropdown after logout
    onClose();
  };

  return (
    <div
      className="absolute sm:w-[127px] sm:h-[104px] bg-white rounded-md top-16 right-20"
      ref={dropdownRef}
    >
      <div className="py-1 flex flex-col py-4 px-[10px]">
        <Link
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-70"
          onClick={handleItemClick}
        >
          My Profile
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-destructive-foreground"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
