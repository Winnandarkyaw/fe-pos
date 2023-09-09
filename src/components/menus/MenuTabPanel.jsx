import React, { useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuCreateForm } from "./MenuCreateForm";
import { TabPanel } from "@mui/lab";
import { AiOutlinePlus } from "react-icons/ai";

const menus = [
  {
    name: "Chicken",
    options: [1, 2, 3],
    price: 200,
    description: "Very good",
  },
  {
    name: "Pork",
    options: [1, 2, 3, 3],
    price: 400,
    description: "Amazing good",
  },
];

export const MenuTabPanel = ({ value, data }) => {
  const [openCreateForm, setOpenCreateForm] = useState(false);
  return (
    <>
      <TabPanel value={value}>
        <div className="flex md:justify-start justify-between flex-wrap">
          <button
            onClick={() => setOpenCreateForm(true)}
            className="w-[220px] h-[270px] bg-dark rounded-[10px] space-y-[10px] flex flex-col justify-center items-center text-white cursor-pointer mt-[20px]"
          >
            <AiOutlinePlus className="text-[24px] text-primary" />
            <h1 className="text-[20px]">Create Menu</h1>
          </button>

          {menus.map((i) => (
            <MenuCard className={"ml-[20px]"} key={i} menu={i} />
          ))}
        </div>
      </TabPanel>
      {openCreateForm && (
        <MenuCreateForm
          onClose={() => {
            setOpenCreateForm(false);
          }}
        />
      )}
    </>
  );
};
