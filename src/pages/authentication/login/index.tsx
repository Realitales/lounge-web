import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/InputField";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useMutation } from "react-query";
import authentication from "../../../api/authentication/index";
import { Router, useNavigate } from "react-router-dom";

declare global {
  interface LoginInterface {
    username: string;
    password: string;
  }
}

export default function Login() {
  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    control,
  } = useForm<LoginInterface>({ reValidateMode: "onSubmit" });

  const navigate = useNavigate();

  const { mutate: LoginMutate, isLoading } = useMutation(
    (loginData) => authentication.login(loginData),
    {
      onSuccess: () => {
        navigate("/lounge");
      },
      onError: () => {
        ///Error
      },
    }
  );

  const onSubmit = async (data: any) => {
    LoginMutate(data);
  };

  return (
    <div className="flex flex-col leading-10 text-[3rem] ">
      <h1 className="ml-[-10px] text-gray-100">The Boy's</h1>
      <h1 className="text-[5rem] text-gray-100">Lounge</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  pt-10 items-center"
      >
        <Input
          Icon={<FaUserAlt className="text-slate-100 text-base" />}
          name="username"
          control={control}
          rules={{ required: "Username field is required" }}
          placeholder="Username"
          clearErrors={clearErrors}
          error={errors?.username && true}
        />
        {
          <p className="text-red-500 font-quicksand text-sm">
            {errors?.username?.message}
          </p>
        }
        <Input
          Icon={<FaLock className="text-slate-100 text-base" />}
          name="password"
          type="password"
          control={control}
          rules={{ required: "Password field is required" }}
          placeholder="Password"
          clearErrors={clearErrors}
          error={errors?.password && true}
        />
        {errors?.password && (
          <p className="text-red-500 font-quicksand text-sm">
            {errors?.password.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-lounge-white text-[#2C2C34] rounded-md text-lg w-20 mt-5 font-quicksand font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
