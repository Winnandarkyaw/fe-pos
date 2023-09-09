import React from "react";
import { BtnPrimary, InputForm, TextArea ,CheckboxToggle} from "../form";
import { BsX } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import DropZone from "react-dropzone";
// import { CategoryAutoComplete } from "../category";

export const MenuEditForm = ({ onClose,menu }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const handleFileDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
      //setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  return (
    <div className="z-[999] bg-dark bg-opacity-95 fixed top-0 left-0 w-full h-[100vh] scrollbar-hide pb-[30px] pt-[90px] flex justify-center items-center">
      <button
        onClick={onClose}
        // disabled={response.isLoading}
        className="bg-dark text-[40px] px-[20px] py-[10px] rounded-[10px] absolute top-0 right-0"
      >
        <BsX />
      </button>

      <div className="w-[300px]">
        <h1 className="text-[30px] font-bold mb-[20px]">Update Menu Item</h1>
        <DropZone onDrop={handleFileDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input accept="image/*" {...getInputProps()} />
              <div className="max-w-xl">
                <label className="flex justify-center w-full h-32 px-4 transition  border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-blue-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <div className="mx-auto">
                      {previewUrl && (
                        <img
                          className="rounded w-[100px] h-[100px] object-cover"
                          alt="menu preview"
                          src={previewUrl}
                        />
                      )}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-slate"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <span className="font-medium text-gray-400">
                      Drop new photo to update, or
                      <span className="ml-1 text-blue-600 underline">
                        browse
                      </span>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          )}
        </DropZone>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full space-y-[15px] pt-[20px]"
        >
          <InputForm label="Menu Item Name" placeholder="example name" isTouched={undefined} error={undefined} />
          <div className="flex space-x-[10px]">
            <InputForm label="Price" type="number" placeholder="price" isTouched={undefined} error={undefined} />
            <InputForm
              label="Discount (%)"
              type="number"
              placeholder="discount" isTouched={undefined} error={undefined}            />
          </div>

          <TextArea
            height={"h-[100px]"}
            label="Description"
            type="text"
            placeholder="describe the menu item"
          />
          {/* 
          <CategoryAutoComplete
            title="Category"
            add={(data) => setChosenCategory(data)}
            chose={chosenCategory}
            org={categories}
          /> */}
          <CheckboxToggle
            leftName="Out of stock"
            rightName="Available"
            defaultChecked={"Available"}
            onChange={(e) => setIsAvailable(e.currentTarget.checked)}
          />
          <div className="pt-[10px]">
            <BtnPrimary
              //   disabled={
              //     response.isLoading || !formik.isValid || !formik.values.name
              //   }
              width={"full"} isLoading={undefined}              //   isLoading={response.isLoading}
            >
              Update Now
            </BtnPrimary>
          </div>
        </form>
      </div>
    </div>
  );
};