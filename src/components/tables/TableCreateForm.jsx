import React from "react";
import { BtnPrimary, InputForm } from "../form";
import { BsX } from "react-icons/bs";
import { useState } from "react";

export const TableCreateForm = ({ onClose, data }) => {
  const [name, setName] = useState("");
  const [openCreateForm, setOpenCreateForm] = useState(false);
  return (
    <div className="z-[999] bg-dark bg-opacity-80 fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center">
      <button
        onClick={onClose}
        className="bg-dark text-[40px] px-[20px] py-[10px] rounded-[10px] absolute top-0 right-0"
      >
        <BsX />
      </button>

      <div className="w-[300px]">
        <h1 className="text-[30px] font-bold mb-[20px]">Create Table</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full space-y-[15px]"
        >
          <InputForm
            name="name"
            label="Table Name"
            placeholder="example table"
            onChange={(e) => setName(e.currentTarget.value)}
            value={name} isTouched={undefined} error={undefined}          />
          <div className="pt-[10px]">
            <BtnPrimary
              // disabled={response.isLoading || !name.length}
              width={"full"} isLoading={undefined}       
              onClick={()=>setOpenCreateForm(true)}       // isLoading={response.isLoading}
            >
              Create Now
            </BtnPrimary>
          </div>
        </form>
      </div>
      
    </div>
  );
};
