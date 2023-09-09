import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { DeletePopup } from "../common_popups";
import {MenuEditForm} from "./MenuEditForm";


export const MenuCard = ({ menu, ...rest }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <div
        className={`w-[220px] h-[270px] bg-dark rounded-[10px] space-y-[10px] text-white cursor-pointer mt-[20px] py-[15px] px-[15px] shadow-sm z-[1] ${
          rest.className
        } relative overflow-hidden group  ${1 == 1 && "border border-primary"}`}
      >
        <div className="absolute top-0 left-0 bg-softestdark flex flex-col rounded-tl-[10px] translate-y-[-100%] group-hover:translate-y-0 transition-all duration-200 z-[9]">
          <button
            onClick={() => setShowDeletePopup(true)}
            className="py-[10px] px-[10px] border-b border-dark text-red-500"
          >
            <AiOutlineDelete />
          </button>
          <button
            onClick={() => setShowEditForm(true)}
            className="py-[10px] px-[10px] text-blue-500"
          >
            <AiOutlineEdit />
          </button>
        </div>

        <div className="pb-[10px] relative z-[1]">
          <div className="text-white absolute top-[5px] right-[5px] bg-opacity-90 bg-softestdark px-[5px] py-[3px] rounded-[10px]">
            {menu.options.length} Options
          </div>

          <img
            src={
              "https://images.summitmedia-digital.com/preview/images/2021/01/18/shin-se-kyung-nm.jpg"
            }
            alt=""
            className="w-full h-[120px] object-cover rounded-[10px] shadow-dark"
          />
        </div>
        {menu.description && (
          <div className="pb-[0px]">
            <p className="text-gray-400 text-sm">{menu.description}</p>
          </div>
        )}
        <div className="h-full flex justify-between">
          <h1>{menu.name}</h1>
          <p className="font-bold text-primary">${menu.price}</p>
        </div>
      </div>
      {showDeletePopup && (
        <DeletePopup
          name={menu.name}
          onClose={() => setShowDeletePopup(false)}
        />
      )}
       {showEditForm && (
        <MenuEditForm onClose={() => setShowEditForm(false)}/>
      )}

    </>
  );
};
