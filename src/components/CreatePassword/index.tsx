import React from "react";
import Header from "../Header";
import { Button } from "../Forms/Button";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import OrDivider from "../Divider";
import InputPassword from "../Forms/input-password";
import Link from "next/link";
import PasswordValidation from "../Validation/password";

const CreatePassword = () => {
  return (
    <div className="flex flex-col w-full pt-20 mt-8 sm:px-20 sm:gap-x-40 sm:flex-row">
      <form className="w-full sm:w-[518px] mx-auto border rounded-md px-10 py-6 shadow">
        <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
          Create password
        </p>
        <span className="mt-2 mb-4 text-[#333] inline-flex justify-center w-full text-center text-sm sm:text-base">
          Sign up for Awabah to get started
        </span>
        <div className="flex flex-col gap-6 mt-2 text-left sm:gap-2">
          <InputPassword
            name="password"
            label="Create Password"
            placeholder="Create Password"
            /* error={errors.password?.message} */
            /* register={register} */
          />
          <InputPassword
            name="ConfirmPassword"
            label="Confirm Password"
            placeholder="Password"
            /* error={errors.password?.message} */
            /* register={register} */
          />

          <PasswordValidation />

          <Button
            variant="default"
            className="py-5 bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
          >
            Create Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
