import React, {  useState } from "react";

import {TableCard } from "../components/tables";
import { AiOutlinePlus } from "react-icons/ai";
import { BtnPrimary } from "../components/form";
import { LayoutProvider } from "../components/layout/LayoutProvider";
import { TableCreateForm } from "../components/tables";
const table = [
  {
    id: 1,
    name: "Table1",
    table_menu_items: [1, 2, 3, 5],
  },
  {
    id: 2,
    name: "Table2",
    table_menu_items: [1, 5],
  },
  {
    id: 3,
    name: "Table3",
    table_menu_items: [1, 2, 3, 5],
  },
];

export const Table = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false);

  return (
    <>
    <LayoutProvider>
    <div className="w-full">
      <BtnPrimary
              className="shadow-custom"
              onClick={() => setOpenCreateForm(true)}
            >
              <AiOutlinePlus />{" "}
              <span className="pl-[5px]">Create Table</span>
            </BtnPrimary>
            <div className="flex flex-wrap sm:justify-start justify-evenly w-full">
 
      <TableCard
        table={{
          id: null,
          name: "Test",
          table_menu_items: [],
        }}
      />
      {table.map((i) => (
        <TableCard table={i} key={i.id} />
      ))}
      </div>
    </div>
    </LayoutProvider>
    {openCreateForm && (
        <TableCreateForm onClose={() => setOpenCreateForm(false)} />
      )} 
    </>
    
  );
};
