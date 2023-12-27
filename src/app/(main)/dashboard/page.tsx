import DashboardComponent from "@/components/Dashboard";
import AdminHeader from "@/components/Header/AdminHeader";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col max-w-[1440px]">
      <AdminHeader />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
