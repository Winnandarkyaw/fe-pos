import React from "react";

export const TextArea = ({ height, ...rest }) => {
  return (
    <div className="w-full space-y-[5px]">
      <label htmlFor={rest.id}>
        <p className="font-medium">{rest.label}</p>
      </label>
      <textarea
        {...rest}
        className={`p-[10px] w-full bg-softestdark text-[14px] border-[1px] border-softestdark rounded-[4px] outline-none ${
          height ? height : "100px"
        } resize-none`}
        autoComplete="off"
      ></textarea>
    </div>
  );
};
