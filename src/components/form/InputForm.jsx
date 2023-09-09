import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const InputForm = ({ isTouched, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full ${rest.label && "space-y-[5px]"}`}>
      <div className="flex justify-between">
        <label htmlFor={rest.id}>
          <p className="font-medium">{rest.label}</p>
        </label>
        {isTouched ? <p className="text-sm text-red-600">{error}</p> : <></>}
      </div>
      {rest.type === "password" ? (
        <div className=" w-full bg-sec_dark text-[14px] border-[1px] border-sec_dark rounded-[4px] outline-none relative">
          <input
            className="p-[10px] bg-sec_dark w-full outline-none"
            {...rest}
            type={showPassword ? "text" : "password"}
          />
          <span
            className="absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEye className="w-[1.5rem] h-[1.5rem]" />
            ) : (
              <AiFillEyeInvisible className="w-[1.5rem] h-[1.5rem]" />
            )}
          </span>
        </div>
      ) : (
        <input
          {...rest}
          disabled={rest.disabled}
          className="p-[10px] w-full bg-sec_dark text-[14px] border-[1px] border-softestdark rounded-[4px] outline-none"
          autoComplete="off"
        />
      )}
    </div>
  );
};
