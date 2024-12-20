"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Button } from "../Forms/Button";
import Link from "next/link";
import Header from "../Header";
import InputField from "../Forms/input-text";
import OrDivider from "../Divider";
import InputPassword from "../Forms/input-password";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="pt-5 flex gap-x-40 flex-col sm:flex-row">
      <div className="py-5 px-6 rounded-md shadow border border-[#EBEBEB] flex flex-col justify-center w-full sm:w-[438px] mx-auto">
        <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
          Login
        </p>
        <span className="mt-2 mb-4 text-[#333] text-center text-sm sm:text-base">
          Welcome back,Please Login to your account
        </span>

        <div className="flex flex-col gap-6 text-left sm:gap-4">
          <InputField
            label="Email address / Phone number"
            name="email"
            type="email"
            /* error={errors.email?.message} */
            placeholder="Email address"
            /* register={register} */
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Password"
            /* error={errors.password?.message} */
            /* register={register} */
          />

          <p className="my-1 text-xs">
            <Link href="/reset-password" passHref>
              <span className="font-bold text-[#027D53] underline">
                Reset password?
              </span>
            </Link>
          </p>

          <Button
            variant="default"
            className="bg-[#3D663D] py-5 w-full flex justify-center items-center text-sm font-semibold text-white"
          >
            Log in
          </Button>
          {/* <p className="py-1 text-center text-sm">
            Dont have an account?
            <Link
              href="/register"
              className="ml-1 font-bold text-base text-[#3D663D]"
            >
              Sign up
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
