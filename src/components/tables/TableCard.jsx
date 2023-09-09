
import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineDropbox,
  AiOutlineEdit,
} from "react-icons/ai";
import { DeletePopup } from "../common_popups";
import { TableEditForm } from "./TableEditForm";
export const TableCard = ({ table, ...rest }) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  return (
    <>
      <div
        {...rest}
        className="w-[190px] h-[150px] rounded-[7px] bg-dark p-[10px] pt-[15px] pb-[20px] flex flex-col justify-between first-of-type:ml-0 md:ml-[30px] mt-[30px] relative"
      >
         <div className="absolute top-0 right-0 p-[15px] space-x-[10px]">
         <button
                className="text-primary w-fit text-[20px]"
                onClick={() => setOpenDeletePopup(true)}
              >
                <AiOutlineDelete />
              </button>
              <button
                className="text-blue-600 w-fit text-[20px]"
                onClick={() => setOpenEditForm(true)}
              >
                <AiOutlineEdit />
              </button>
         </div>
        <div className="text-[30px]">
          <AiOutlineDropbox />
        </div>
        <div>
          <p className="text-[14px] text-gray-300">
            {table.table_menu_items.length} items
          </p>
          <h1 className="font-bold text-[18px]">{table.name}</h1>
        </div>
      </div>
      {openDeletePopup && (
        <DeletePopup
          name={table.name}
          onClose={() => setOpenDeletePopup(false)}
        />
      )}{" "}
       {openEditForm && (
        <TableEditForm
          data={table}
          onClose={() => setOpenEditForm(false)}
        />
      )} 
    </>
  );
};


