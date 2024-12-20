"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import InputField from "@/components/Forms/input-text";
import { Button } from '../Forms/Button';
import Link from 'next/link';

const VerifyAccountComponent = () => {
    const [activeTab, setActiveTab] = useState("phone");
      const { control, handleSubmit, register } = useForm();


    const handleTabMenu = (type: string) => {
        if(type === "phone") {
            setActiveTab("phone")
        } else {
            setActiveTab("email")
        }
    }

  return (
    <div className="flex h-fit rounded flex-col px-10 py-6 my-32 justify-center items-center w-full sm:w-[518px] mx-auto border border-gray-200">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        Verify your account
      </p>
      <span className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        Please how would you like to verify your account
      </span>

      {/* Tab Email and Phone number */}
      <div className="text-[#0A330A] border p-2 text-sm my-6 font-medium cursor-pointer bg-white rounded-md w-full border-[#EBEBEB] flex justify-between items-center gap-x-4">
        <div
          onClick={() => handleTabMenu("phone")}
          className={`${
            activeTab === "phone" ? "bg-[#E0ECD8]" : "bg-transparent"
          }  flex justify-center items-center w-full py-2 rounded-md`}
        >
          Phone number
        </div>
        <div
          onClick={() => handleTabMenu("email")}
          className={`${
            activeTab === "email" ? "bg-[#E0ECD8]" : "bg-transparent"
          } flex justify-center items-center w-full py-2 rounded-md`}
        >
          Email address
        </div>
      </div>
        <form className='w-full'>
            {activeTab === "phone" ? 
            (<InputFieldPhoneNumber
                label="Phone number"
                name="phone"
                type="tel"
                /* error={errors.email?.message} */
                placeholder="80xxxxxxxx"
                register={register}
            />) : (
                <InputField
                    label="Email address"
                    name="email"
                    type="email"
                    /* error={errors.email?.message} */
                    placeholder="Email address"
                    /* register={register} */
                />
            )}

            <Button
                variant="default"
                className="my-5 py-5 bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
                >
                Verify
            </Button>

            <p className="py-1 text-center text-sm">
          Already have an account?
          <Link
            href="/"
            className="ml-1 font-semibold text-base text-[#3D663D]"
          >
            Log in
          </Link>
        </p>
        </form>
    </div>
  );
}

export default VerifyAccountComponent