import React from "react";
import { Controller, Control, UseFormClearErrors } from "react-hook-form";
import { IconType } from "react-icons";

export default function Input({
  name,
  control,
  rules,
  error,
  clearErrors,
  placeholder,
  Icon,
  type,
}: {
  name: string;
  control: Control<any>;
  rules?: Object;
  error?: boolean;
  clearErrors?: UseFormClearErrors<any>;
  placeholder?: string;
  Icon?: JSX.Element;
  type?: string;
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <div className="self-start  transform translate-x-3 translate-y-8 z-50">
              {Icon}
            </div>
            <input
              type={type}
              className={`${
                error ? "animate-headShake" : ""
              } text-base font-quicksand bg-lounge-black text-lounge-white py-3 pl-9 pr-6  rounded-lg focus:outline-0 focus:placeholder:text-transparent`}
              onChange={(event) => {
                onChange(event);
                clearErrors && clearErrors(name);
              }}
              placeholder={placeholder}
            />
          </>
        )}
      />
    </>
  );
}
