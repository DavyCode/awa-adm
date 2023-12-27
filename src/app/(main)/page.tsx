"use client";
import React from "react";
import AdminHeader from "@/components/Header/AdminHeader";

interface IProp {
  children: JSX.Element;
}
const page: React.FC<IProp> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <AdminHeader />
      {children}
    </div>
  );
};

export default page;
