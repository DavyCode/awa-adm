"use client";
import React from "react";
import Dropdown from "../Dropdowns/selectOption";
import { SortByOptions, FilterByOptions } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import ArrowDownSolid from "@/assets/icons/ArrowDownSolid";

interface PastDateProps {
  label: string;
  value: string;
  icon?: JSX.Element;
  arrowIcon?: JSX.Element;
}

const FilterByPastDate: PastDateProps[] = [
  {
    label: "Past 30 days",
    value: "Past 30 days",
  },
  {
    label: "Past 7 days",
    value: "Past 7 days",
  },
  {
    label: "Custom date",
    value: "Custom date",
    icon: <CalendarIcon />,
    arrowIcon: <ArrowDownSolid />,
  },
];

const DashboardComponent = () => {
  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };

  return (
    <div className="bg-primary w-full sm:max-w-[1440px] sm:h-[259px] pt-[46px] pr-20 pb-[151px] pl-[85px] flex border-t border-[#F1f1f1]/30">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="text-sm font-normal text-white/80">
            Dashboard Overview
          </span>
          <p className="text-2xl font-medium sm:max-w-[225px] text-white mt-1">
            Welcome Back Tunji
          </p>
        </div>
        <div className="w-full sm:w-[393px] flex justify-between items-center gap-2">
          <Dropdown
            options={SortByOptions}
            name="Sort by"
            onSelect={handleSelect}
          />
          <Dropdown
            options={FilterByOptions}
            name="Filter by"
            onSelect={handleSelect}
          />
          <Dropdown
            options={FilterByPastDate}
            name="Past 30 days"
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
