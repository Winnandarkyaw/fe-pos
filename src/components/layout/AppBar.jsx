import React from "react";

const AppBar = () => {
  return (
    <div className="h-[70px] w-[calc(100%-100px)] fixed top-0 right-0 bg-dark z-[999]">
      <div className="flex justify-between items-center w-full h-full">
        <div className="pl-[20px]">
          <h1 className="text-[24px] font-bold">Restaurant</h1>
          <p className="text-[15px] text-gray-500">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
