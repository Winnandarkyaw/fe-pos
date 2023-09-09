import React from "react";
import Sidebar from "./Sidebar";
import AppBar from "./AppBar";

export const LayoutProvider = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <AppBar />
      <div className="w-[calc(100%-100px] ml-[100px] mt-[70px] p-[20px]">
        {children}
      </div>
    </div>
  );
};
