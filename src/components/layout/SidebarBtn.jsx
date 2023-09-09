import React from "react";

export const SidebarBtn = ({ icon, isActive, ...rest }) => {
  return (
    <div className={`w-full ${isActive && "bg-dark"}` }>
      <button
        className={`${
          isActive
            ? "px-[10px] py-[10px] text-white rounded-[5px] bg-primary w-fit mx-auto cursor-pointer block shadow-custom"
            : "mx-auto flex justify-center"
        }`}
        onClick={rest.onClick}
      >
        <div className="text-[20px] mx-auto cursor-pointer">{icon}</div>
      </button>
    </div>
  );
};