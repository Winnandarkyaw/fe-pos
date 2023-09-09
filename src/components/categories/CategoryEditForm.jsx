import React from "react";
import { BtnPrimary, InputForm } from "../form";
import { BsX } from "react-icons/bs";
import { useEffect, useState } from "react";

const CategoryEditForm = ({ data, onClose }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(data.name);
  }, [data]);

  return (
    <div className="z-[999] bg-dark bg-opacity-80 fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center">
      <button
        onClick={onClose}
        className="bg-dark text-[40px] px-[20px] py-[10px] rounded-[10px] absolute top-0 right-0"
      >
        <BsX />
      </button>

      <div className="w-[300px]">
        <h1 className="text-[30px] font-bold mb-[20px]">Update Category</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full space-y-[15px]"
        >
          <InputForm
            name="name"
            label="Category Name"
            placeholder="example category"
            onChange={(e) => setName(e.currentTarget.value)}
            value={name}
          />
          <div className="pt-[10px]">
            <BtnPrimary
              // disabled={response.isLoading || !name.length}
              width={"full"}
              // isLoading={response.isLoading}
            >
              Update Now
            </BtnPrimary>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryEditForm;
